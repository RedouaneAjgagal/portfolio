//@ts-check

import React, { useState } from "react";
import GradientText from "./GradientText";

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

/**
 * The input type value
 * @typedef {object} Input
 * @property {string} value - the value of the input
 * @property {boolean} isError - if the value has an error or not (default: true)
 * @property {string} errorMsg - the error message to display
 * @property {boolean} isShowError - to display the error message (default: false) 
 */

/**
 * The contact input type for the validation
 * @typedef {object} ContactInput
 * @property {Input} name - the user name object
 * @property {Input} email - the user email object
 * @property {Input} message - the message content object
 */


/**
 * @template T
 * @typedef {Array<T | React.Dispatch<React.SetStateAction<T>>>} UseStateTuple
 */

/**
 * @typedef {Object} ContactRequest
 * @property {boolean} isSuccess
 * @property {boolean} isLoading
 * @property {boolean} isVisible
 */


/**
 * Contact component that holds the contact form
 * @returns {React.JSX.Element}
 */
const Contact = () => {
    /** @type {ContactRequest} */
    const intialContactRequest = {
        isSuccess: false,
        isLoading: false,
        isVisible: false
    };

    /** @type {UseStateTuple<ContactRequest>} */
    const [contactRequest, setContactRequest] = useState(intialContactRequest);

    /**
     * @type {ContactInput}
     */
    const intialInputs = {
        name: {
            value: "",
            isError: true,
            errorMsg: "Please provide a name",
            isShowError: false
        },
        email: {
            value: "",
            isError: true,
            errorMsg: "Please provide your email",
            isShowError: false
        },
        message: {
            value: "",
            isError: true,
            errorMsg: "Please enter your message",
            isShowError: false
        }
    };

    /**
     * @type {UseStateTuple<ContactInput>}
     */
    const [inputs, setInputs] = useState(intialInputs);


    /**
     * Contact form to recieve user's messages
     * @param {React.FormEvent<HTMLFormElement>} event
     * @returns {Promise<void>} - Send form data to the EmailJS service
     */
    const submitContactFormHandler = async (event) => {
        event.preventDefault();

        // don't submit a new message if it's still sending the previous one
        if (contactRequest.isLoading) return;

        /**
         * grab all the input errors and check if any has an error
         * @type {boolean}
         */
        const isInputsHasError = Object.values(inputs).some((value) => value.isError);

        if (isInputsHasError) {
            setInputs(prev => {
                return {
                    ...prev,
                    name: {
                        ...prev.name,
                        isShowError: true
                    },
                    email: {
                        ...prev.email,
                        isShowError: true
                    },
                    message: {
                        ...prev.message,
                        isShowError: true
                    }
                }
            });

            console.log("ERROR");
            return;
        };

        //@ts-ignore
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        //@ts-ignore
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        //@ts-ignore
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        /**
         * contact form content
         * @typedef {Object} TemplateParams
         * @property {string} name - the name of the user
         * @property {string} email - the user's email
         * @property {string} message - the user's message content
         */

        /** @type {TemplateParams} */
        const templateParams = {
            name: inputs.name.value,
            email: inputs.email.value,
            message: inputs.message.value
        }

        try {
            setContactRequest({
                isLoading: true,
                isSuccess: false,
                isVisible: false
            });
            await emailjs.send(serviceId, templateId, templateParams, {
                publicKey: publicKey
            });
            setContactRequest({
                isLoading: false,
                isSuccess: true,
                isVisible: true
            });
        } catch (error) {
            setContactRequest({
                isLoading: false,
                isSuccess: false,
                isVisible: true
            });
            if (error instanceof EmailJSResponseStatus) {
                console.log('EMAILJS FAILED...', error);
                return;
            }

            console.log('ERROR', error);
        }

        setInputs(intialInputs);

        setTimeout(() => {
            setContactRequest(intialContactRequest);
        }, 4000);
    }

    /**
     * set the name input values (value, errorMsg, isError) whenever typing the name (onChange)
     * @type {React.ChangeEventHandler<HTMLInputElement>} 
     */
    const setNameHandler = (e) => {
        const name = e.target.value;

        /**
         * name error condition if the name is empty or less than 3 characters
         * @type {boolean}
         */
        const isNameError = name.trim() === "" || name.trim().length < 3;

        setInputs(prev => {
            return {
                ...prev,
                name: {
                    value: name,
                    isError: isNameError,
                    isShowError: false,
                    errorMsg: name.trim() === ""
                        ? intialInputs.name.errorMsg
                        : name.trim().length < 3
                            ? "The name must be at least 3 characters"
                            : ""
                }
            }
        });
    }


    /**
     * set the email input values (value, errorMsg, isError) whenever typing the email (onChange)
     * @type {React.ChangeEventHandler<HTMLInputElement>} 
     */
    const setEmailHandler = (e) => {
        const email = e.target.value;

        /**
         * email error validation to check if its an invalid email address
         * @type {boolean}
         */
        const isInvalidEmail = email.trim() === ""
            || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

        setInputs(prev => {
            return {
                ...prev,
                email: {
                    value: email,
                    isError: isInvalidEmail,
                    isShowError: false,
                    errorMsg: email.trim() === ""
                        ? intialInputs.email.errorMsg
                        : isInvalidEmail
                            ? "Please provide a valid email"
                            : ""
                }
            }
        });
    }

    /**
     * set the email input values (value, errorMsg, isError) whenever typing the email (onChange)
     * @type {React.ChangeEventHandler<HTMLTextAreaElement>} 
     */
    const setMessageContentHandler = (e) => {
        const message = e.target.value;

        /**
         * message error validation
         * @type {boolean}
         */
        const isMessageError = message.trim() === "" || message.length > 1000;

        setInputs(prev => {
            return {
                ...prev,
                message: {
                    value: message,
                    isShowError: false,
                    isError: isMessageError,
                    errorMsg: message.trim() === ""
                        ? intialInputs.message.errorMsg
                        : message.length > 1000
                            ? "Message content limit is 1000 characters"
                            : ""
                }
            }
        });
    }


    return (
        <section className="flex flex-col gap-10 pt-4 border-t-2 border-zinc-800">
            <GradientText>
                <h2 className="font-serif font-medium text-4xl py-1">Get in touch</h2>
            </GradientText>
            <form className="text-left grid grid-cols-1 gap-4 lg:grid-cols-2" onSubmit={submitContactFormHandler} noValidate>
                <div className="col-span-1">
                    <input type="text" placeholder="Name" className={`w-full py-2 px-3 rounded-sm bg-neutral-900 border outline-1 outline-offset-0 outline-zinc-800 ${inputs.name.isShowError && inputs.name.isError && inputs.name.errorMsg !== "" ? "border-red-600/80" : "border-zinc-700/70"}`} onChange={setNameHandler} value={inputs.name.value} />
                    <div className={`duration-200 px-3 rounded-sm text-sm font-medium ${inputs.name.isShowError && inputs.name.isError && inputs.name.errorMsg !== "" ? "visible bg-red-700/70 py-1 mt-1 opacity-100" : "h-0 invisible opacity-0"}`}>
                        <span>{inputs.name.errorMsg}</span>
                    </div>
                </div>
                <div className="col-span-1">
                    <input type="email" placeholder="Email" className={`w-full py-2 px-3 rounded-sm bg-neutral-900 border outline-1 outline-offset-0 outline-zinc-800 ${inputs.email.isShowError && inputs.email.isError && inputs.email.errorMsg !== "" ? "border-red-600/80" : "border-zinc-700/70"}`} onChange={setEmailHandler} value={inputs.email.value} />
                    <div className={`duration-200 px-3 rounded-sm text-sm font-medium ${inputs.email.isShowError && inputs.email.isError && inputs.email.errorMsg !== "" ? "visible bg-red-700/70 py-1 mt-1 opacity-100" : "h-0 invisible opacity-0"}`}>
                        <span>{inputs.email.errorMsg}</span>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <textarea name="message" id="message" className={`w-full resize-none py-2 px-3 rounded-sm bg-neutral-900 border outline-1 outline-offset-0 outline-zinc-800 ${inputs.message.isShowError && inputs.message.isError && inputs.message.errorMsg !== "" ? "border-red-600/80" : "border-zinc-700/70"}`} placeholder="Message" rows={8} onChange={setMessageContentHandler} value={inputs.message.value}></textarea>
                    <div className={`duration-200 px-3 rounded-sm text-sm font-medium ${inputs.message.isShowError && inputs.message.isError && inputs.message.errorMsg !== "" ? "visible bg-red-700/70 py-1 opacity-100" : "h-0 invisible opacity-0"}`}>
                        <span>{inputs.message.errorMsg}</span>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <button disabled={contactRequest.isLoading} className="bg-neutral-800/10 p-3 rounded-sm border-2 border-neutral-300/20 w-full font-medium text-slate-300 uppercase transition-all hover:bg-neutral-900">
                        {contactRequest.isLoading
                            ? "Sending.."
                            : "Send Message"
                        }
                    </button>
                    <div className={`w-fit m-auto mt-2 text-center duration-200 px-8 rounded-sm font-medium ${!contactRequest.isVisible
                        ? "h-0 invisible opacity-0"
                        : !contactRequest.isLoading && contactRequest.isSuccess
                            ? "visible bg-green-800 py-2 opacity-100"
                            : "visible bg-red-800 py-2 opacity-100"}`}>
                        {!contactRequest.isVisible
                            ? null
                            : <span>
                                {!contactRequest.isLoading && contactRequest.isSuccess
                                    ? "Sent Successfully"
                                    : "Failed to send the message"
                                }
                            </span>
                        }
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Contact