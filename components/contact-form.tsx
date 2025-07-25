"use client";

import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { ContactIconsList } from "./contact-icons";
import classes from "../app/css/additional-styles/ContactUs.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function ContactForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const message = messageRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";
    const name = nameRef.current?.value.trim() ?? "";

    if (!message || !email || !name) {
      alert("Please ensure all fields are completed.");
      return;
    }

    setStatus("Sending...");

    const templateParams = {
      email: email,
      name: name,
      message: message,
    };

    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_EMAIL_SERVICE}`,
        "template_32ap3um",
        templateParams
        // process.env.NEXT_PUBLIC_EMAIL_KEY
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          setStatus("Sorry, message did not send. Please email!");
          console.log("FAILED...", error.text);
        }
      );
  };

  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper} id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Please write to us with a short description of your project, and
              we will get back to you as soon as possible. If you need a greater
              level of detail, please feel free to email us.
            </Text>

            <ContactIconsList />

            {/* <Group mt="xl">{icons}</Group>  */}
          </div>

          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              radius="md"
              ref={emailRef}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              radius="md"
              ref={nameRef}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="Let us know how we can help you"
              minRows={8}
              mt="md"
              radius="md"
              ref={messageRef}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="space-between" mt="md">
              {status ? <Text>{status}</Text> : null}
              <Button
                className={classes.control}
                onClick={handleSubmit}
                radius="md"
              >
                Send message
              </Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    </div>
  );
}
