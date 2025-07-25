"use client";

import {
  AspectRatio,
  Card,
  Container,
  Image,
  SimpleGrid,
  Text,
  Modal,
} from "@mantine/core";
import { useState } from "react";
import classes from "../app/css/additional-styles/PortfolioGrid.module.css";

const articleData = [
  {
    title: "Why hire a designer?",
    image: "/images/code.png",
    date: "July 25, 2025",
    fullText: [
      {
        heading: "Are you using a WYSIWYG editor?",
        body: "A 'What You See Is What You Get' editor is generally a suite of templates, with drag and drop elements that people can use to build websites. Often these come as part of a wider package including the purchase of a domain name. They have benefits without doubt. They can be 'free', and intuitive to use and learn. In honesty, they can create websites that look reasonably good. They also allow the creator to have a hands-on process, which can be appealing. However, they have limitations that can be significant.",
      },
      {
        heading: "Difference 1: Performance Optimisation",
        body: "In my earlist days, I used website builders, and I'm still quite impressed with the scale and speed of their development. But, I've also had to do remiedial work for people who started on one, built something which spiralled out of control, and where every single element had its own set of attributes like a width, a height, its own colour... In short, it meant that for parts of the site which should have been standardised, I had to change not one set of metrics for all of those components, but every metric for each component individually. The effects on loading time, on maintenance time, and on debugging was high. In most cases it would honestly be simpler for a good designer to start again, and build up the concept from scratch.",
      },
      {
        heading: "Difference 2: Search Engine Optimisation (SEO)",
        body: "What isn't well known is that many search engines operate by indexing their results to prioritise the order in which results are shown. A lot of WYSIWYG editors provide boilerplate text which may be used across a large number of sites who use it. So what?! Imagine any talent show where several contestants unknowingly perform the same act. The judges may struggle to differentiate between them and so cannot decide which acts to put through to the next round. This is what happens when duplicate content exists. Search engines, like Google, aim to provide the best user experience by displaying diverse and unique results. When they encounter duplicates, they must choose which version is the most relevant. Search engines do not typically 'penalises' duplicate content, but they may prioritise one version of the content to enhance the variety of their search results. This can lead to reduced visibility for the other versions.",
      },
      {
        heading: "Difference 3: Underneath the surface",
        body: "Many templates which are available for download look perfectly good on the surface, but we can never see the code that runs it. This is fine for many cases, but when something goes wrong or is slow, then how can we fix it? In short, we can't! Good website developers not only use code which has long lasting legacy support, they will also update features, reducing security risks, and ensuring that the site is future-proofed. This is not something that can be done with a WYSIWYG editor. Wordpress sites are especially a risk as their prevelance means attackers are more keen to break that platform. Outdated themes or plugins, weak login credentials (think password123), lack of backups, and poor user management (too many admins) all can cause weak links that can be exploited.",
      },
      {
        heading: "Difference 4: On the surface",
        body: "Finally, less is often more when it comes to website design. But the plethora of tools, text, animations, effects, transitions (etc.. etc...) that are available in some editors can be both overwhelming, and also overbearing. A simple site delivers its messages well. Yes, it should look good, but the visuals should never detract from the message or the product. A good website designer will always ensure to enhance what matters, and in a way that is accessible to all consumers of that content.",
      },
    ],
  },
  {
    title: "The design process",
    image: "/images/design.png",
    date: "July 17, 2025",
    fullText: [
      {
        heading: "Why do you need a design process?",
        body: "I know... I use the word design a LOT! But, design and planning are the foundations of what makes any digital product a success. One of the very first things that good site designers will do is to understand what the site is for, who the target audience is, and what the key messages are. This is not just a case of asking a few questions, but rather a process of understanding the business, its goals, and how the site can help achieve those goals. This is often done through a series of meetings, discussions, and potentially even workshops. These meetings are informed by, and inform the creation of wireframes and templates, essentially simple sketches that identify which content needs to go where, and what the overall layout and feel of the site is.",
      },
      {
        heading: "Designing functionality",
        body: "It all starts with drawing a line (or a box)... But beyond that, there is a whole world of design that goes into developing a good digital product. A good analogy is to think of it like the blueprint of a building. Sure, we may design a really excellent looking building, with featured gardens, a lake, a golden staircase (we can dream!). But, we forgot to plumb it in! Where are the electrics coming from... and how on Earth does someone who needs wheelchair access get across that lawn?! We need to think about the whole picture, and how the site will function, not just how it will look. This is where scalability comes in. A good design process will consider how the site can grow and evolve over time, ensuring that it can adapt to changing needs and requirements of not just your business, but also your customers. This means thinking about how new features can be added, how content can be updated, and how the site can be maintained in the long term.",
      },
      {
        heading: "Designing dataflows",
        body: "Dataflow is a bit of a buzz-word, but it is crucial. A well-designed site will understand where and how it needs to use data. In many cases this data may be retrieved from third parties, but it may also be retrieved from a database. If you need to use a database, it is infinitely simpler to get the design right first-time. Does it store what you need, and in a way that you need it? Is the data accurate and consistent? If not, how do we treat it? Can your database scale as your business does, and can it flex as your business evolves?. Can you set policies so that only certain data can be accessed or amended by certain users? It's hefty stuff, but it's what makes it all work! The attached image is a snippet of a recent app built to create a music practice application. This snippet is a small part of a much wider set of planning documents, but was crucial when it came to the development stage.",
      },
      {
        heading: "Designing the user experience (UX)",
        body: "So, we've got to here... we've got a good looking template, with strong branding and layout. We've got a good understanding of what we want the site to do, and we know what the data is going to be and where it's going to come from. That's it, right?! Well, not quite... In truth, design nearly always alters throughout the development process. It's only really once something is developed and tested that we can know if it works or if there is a better way. This is all about the user experience - how does the site or application work when it's being used, and can we make it even better!?",
      },
    ],
  },
];

export default function PortfolioGrid() {
  const [selectedArticle, setSelectedArticle] = useState<
    null | (typeof articleData)[0]
  >(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (article: (typeof articleData)[0]) => {
    setSelectedArticle(article);
    setModalOpen(true);
  };

  const cards = articleData.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
      onClick={() => openModal(article)}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} radius="md" alt="article image" />
      </AspectRatio>
      <Text className={classes.date}>{article.date}</Text>
      <Text className={classes.title}>{article.title}</Text>
    </Card>
  ));

  return (
    <>
      <Container py="xl">
        <div
          className="space-y-3 text-center"
          style={{ marginBottom: 24 }}
          id="difference"
        >
          <p className="text-2xl font-bold text-gray-900">
            If you're still not sure about the value of hiring a designer, read
            our articles below. They cover some of the key differences between
            using a WYSIWYG editor and hiring a professional designer, as well
            as the design process itself.
          </p>
        </div>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 0, sm: "md" }}>
          {cards}
        </SimpleGrid>
        <Modal
          opened={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedArticle?.title}
          size="lg"
        >
          {selectedArticle && (
            <div>
              <Image src={selectedArticle.image} radius="md" mb="md" />

              <Text size="sm" c="dimmed" mb="xs">
                {selectedArticle.date}
              </Text>

              {selectedArticle.fullText.map((section, index) => (
                <div key={index} style={{ marginBottom: 24 }}>
                  <Text component="h2" size="lg" fw={600} mb="xs">
                    {section.heading}
                  </Text>
                  <Text component="p" size="sm" lh={1.6}>
                    {section.body}
                  </Text>
                </div>
              ))}
            </div>
          )}
        </Modal>
      </Container>
    </>
  );
}
