import whatsapp from '../assets/icons/WhatsApp.svg';
import linkedIn from '../assets/icons/LinkedIn.svg';
import email from '../assets/icons/email.svg';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { emailJsPublicKey, emailJsServiceId, emailJsTemplateId } from '../constants/env';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../components/Input';
import classNames from 'classnames';

const schema = yup
  .object({
    userName: yup.string().required('Full name is required.'),
    userEmail: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Email is required.'),
    message: yup.string().required('Message cannot be empty.'),
  })
  .required();

export type Inputs = {
  userName: string;
  userEmail: string;
  message: string;
};

type ContactsProps = {
  hue1?: number;
  hue2?: number;
};

const Contacts = ({ hue1 = 60, hue2 = 180 }: ContactsProps) => {
  const form = useRef<null | HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const submitForm = async () => {
    const formRef = form.current;
    setIsLoading(true);
    setSubmitError(false);
    if (formRef) {
      try {
        await emailjs.sendForm(emailJsServiceId, emailJsTemplateId, formRef, {
          publicKey: emailJsPublicKey,
        });
      } catch (error) {
        setSubmitError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section id="contacts" className="section-padding pb-10">
      <div className="container">
        <h2 className="section-title">Contacts</h2>
        <div>
          <div
            style={{
              background: `
                linear-gradient(40deg, #121212, #121212) padding-box,
                linear-gradient(135deg, hsl(${hue1}, 85%, 70%) 0%, #251a20, #251a20, hsl(${hue2}, 70%, 55%) 100%) border-box
            `,
            }}
            className="relative justify-items-center overflow-hidden rounded-[1.25rem] border-2 border-solid border-transparent px-4 py-10 text-center text-white sm:px-8"
          >
            <div
              style={{
                background: `linear-gradient(140deg, hsl(${hue1}, 70%, 50%) 3%, hsl(${hue2}, 95%, 45%) 100%)`,
              }}
              className="absolute left-1/2 h-[120px] w-[120px] translate-x-[-50%] rounded-full blur-lg"
            ></div>
            <div
              style={{
                background: `linear-gradient(50deg, hsl(${hue1}, 70%, 10%) 5%, hsl(${hue2}, 68%, 40%) 100%)`,
              }}
              className="absolute left-1/2 z-[1] h-[40px] w-[28px] translate-x-[-50%] scale-[12] blur-lg"
            ></div>
            <div className="relative z-20 flex items-center justify-center">
              <div className="flex flex-col gap-3">
                <div
                  style={{
                    background: `linear-gradient(140deg, hsl(${hue1}, 75%, 20%) 3%, hsl(${hue2}, 65%, 45%) 100%)`,
                  }}
                  className="relative z-[2] h-[120px] w-[120px] rounded-full"
                >
                  <div
                    style={{
                      background: `linear-gradient(140deg, hsl(${hue1}, 70%, 40%) 3%, hsl(${hue2}, 95%, 45%) 100%)`,
                    }}
                    className="absolute inset-0 z-[2] m-auto h-[90px] w-[90px] rounded-full"
                  ></div>
                  <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform text-4xl">
                    🤙
                  </span>
                </div>
                <p className="text-xl font-black sm:text-2xl">Let’s talk</p>
              </div>
            </div>
            <div className="relative z-20 mt-3 flex items-center justify-center gap-3">
              <a
                href="https://wa.me/380969680142?text=Hi!"
                className="flex h-10 w-10 items-center justify-center rounded-xl border-t-[1px] border-surface-twilight bg-surface-nightfall"
              >
                <img src={whatsapp} className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dmitry-romanenko-bb1615340"
                className="flex h-10 w-10 items-center justify-center rounded-xl border-t-[1px] border-surface-twilight bg-surface-nightfall"
              >
                <img src={linkedIn} className="h-5 w-5" />
              </a>
              <a
                href="mailto:dmitryromanenko80@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-xl border-t-[1px] border-surface-twilight bg-surface-nightfall"
              >
                <img src={email} className="h-5 w-5" />
              </a>
            </div>

            <div className="m-auto max-w-[500px]">
              <div className="relative z-[3] my-4 text-center text-base font-normal sm:text-left">
                I’d love to hear from you! Whether you have a question, feedback, or just want to
                say hello, feel free to reach out. Fill out the form below, and I’ll get back to you
                as soon as possible.
              </div>

              <form ref={form} className="flex flex-col gap-4" onSubmit={handleSubmit(submitForm)}>
                <Input
                  errorText={errors.userName?.message}
                  id="text"
                  label="Full name"
                  name="userName"
                  placeholder="ex: John Doe"
                  type="text"
                  register={register}
                />
                <Input
                  errorText={errors.userEmail?.message}
                  id="email"
                  label="Email address"
                  name="userEmail"
                  placeholder="ex: john.doe@gmail.com"
                  type="email"
                  register={register}
                />
                <Input
                  errorText={errors.message?.message}
                  id="message"
                  label="Your message"
                  name="message"
                  placeholder="Leave a comment..."
                  register={register}
                  isTextarea
                />
                <button
                  disabled={isLoading}
                  className={classNames(
                    'flex items-center justify-center gap-1 rounded-lg bg-surface-twilight px-6 py-3 text-white',
                    { 'bg-surface-misty-morning': isLoading }
                  )}
                >
                  <span className="mr-2 h-2.5 w-2.5 rounded-full bg-white shadow-circle-glow"></span>
                  <span className="glow-text text-base">Send message</span>
                </button>
                {submitError && (
                  <div className="flex flex-col text-sm text-red-400">
                    <span>Failed to submit the form.</span>
                    <span>Please check your internet connection or try again later.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
