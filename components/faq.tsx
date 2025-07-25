import { IconPlus } from "@tabler/icons-react";
import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
  Container,
  ThemeIcon,
  Title,
} from "@mantine/core";
import classes from "../app/css/additional-styles/FaqWithBg.module.css";

const wysiwygPlaceholder =
  "We understand the appeal, and ultimately it is a choice. But there are limits to what can be achieved without getting 'under the hood' of a site. We do believe it is worth the extra time and effort. We can fine tune every aspect, from colours, to layout, to position of individual items, and more. We also test for accessibility, functionality, and optimise code bases to be more efficient. Take a look at the article on our 'About' page for more information about the difference we make.";

const timePlaceholder =
  "The timeline for development varies based on the complexity and scope of the project. A single-page website with a small number of sections (suitable for many) can be delivered and hosted within as little time as a fortnight. Multi-page websites can take 4 to 6  weeks. More complex applications may take several months. We'll be able to provide you with a more detailed estimate of times during planning, and will provide a detailed timeline during the project kickoff phase.";

const costsPlaceholder =
  "Costs will vary according to the complexity of a build, and the options needed. For simpler projects, we provide costs at the outset which are determined by the final product(s) and an agreed design plan. This is a risk to us, as the development stage can be difficult to predict. However, we believe that this is the fairest way to charge for such projects. If this is the case, we will not charge you more than that amount unless you request additional features or large changes during the development phase. If costing for more complex applications we will need to understand your budget, your regulatory and functional requirements, and we will work with you to ensure that we can deliver a product that meets your needs within that budget. We will provide a detailed breakdown of estimated costs during the planning phase, and will keep you informed with progress vs. budget throughout the project, but especially at significant milestones.";

const discountPlaceholder =
  "We may offer discounts to new startups and charities. These will be discretionary, and only apply to static sites. We will not offer discounts for more complex applications, as these require a greater level of planning and development. If you are a new startup or charity, please contact us to discuss your project and we will see if we can help.";

const mobilePlaceholder =
  "Absolutely! All our websites are designed to be responsive and optimized for various devices and screen sizes. We recognise that the majority of visitors to a site will be using the nearest device to hand. More complex applications may need to be optimised for larger screens depending on the functionality needed. For example, if you wish to monitor and maintain your databases, this is not always possible to do well on a mobile.";

const CMSPlaceholder =
  "Yes! This can be built into any application. We will work with you to understand what you would like to update, how frequently, and how complex that information is. Where appropriate we would create a database to store the information, and depending on your level of know-how can create solutions from an api endpoint, to adding you and colleagues as database managers, to creating an admin dashboard (accessible via a login from your site) where you can update and edit that information. These options may be suitable if you are likely to update your content frequently and need content to be instantly changed on the site. However, for many it may be simpler to build a static site and have an agreement for us update it manually at regular periods.";

const helpPlaceholder =
  "We've been there! But, that's why we're here, and that's why we prioritise planning, and use trusted technologies we know. We find that investing time into planning means that the difficulty is reduced hugely during later stages. And where they do arise, using known technologies helps us to debug them and resolve them rapidly. Also, be assured that for simple sites and applications, there really should not be any difficulty. Build it, and they will come... (with good advertising, marketing strategies, and a bit of luck :) ).";

export default function Faq() {
  return (
    <div className={classes.wrapper} id="faq">
      <Container size="sm">
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue="site"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{
            label: { color: "var(--mantine-color-black)" },
            item: { border: 0 },
          }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus size={18} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <AccordionItem className={classes.item} value="site">
            <AccordionControl>
              I only need a simple, static, landing page, shouldn't I just use a
              WYSIWYG editor?
            </AccordionControl>
            <AccordionPanel>{wysiwygPlaceholder}</AccordionPanel>
          </AccordionItem>

          <AccordionItem className={classes.item} value="develop-time">
            <AccordionControl>
              How long does it take to develop a website or application?
            </AccordionControl>
            <AccordionPanel>{timePlaceholder}</AccordionPanel>
          </AccordionItem>

          <AccordionItem className={classes.item} value="develop-cost">
            <AccordionControl>How much does it all cost?</AccordionControl>
            <AccordionPanel>{costsPlaceholder}</AccordionPanel>
          </AccordionItem>

          <AccordionItem className={classes.item} value="discount">
            <AccordionControl>Do you offer discounts at all?</AccordionControl>
            <AccordionPanel>{discountPlaceholder}</AccordionPanel>
          </AccordionItem>

          <AccordionItem className={classes.item} value="mobile">
            <AccordionControl>
              Will my website or application be mobile-friendly?
            </AccordionControl>
            <AccordionPanel>{mobilePlaceholder}</AccordionPanel>
          </AccordionItem>

          <AccordionItem className={classes.item} value="cms">
            <AccordionControl>
              Can I update the website content myself?
            </AccordionControl>
            <AccordionPanel>{CMSPlaceholder}</AccordionPanel>
          </AccordionItem>

          <AccordionItem className={classes.item} value="help">
            <AccordionControl>
              I don't know where to start! Help!?
            </AccordionControl>
            <AccordionPanel>{helpPlaceholder}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </div>
  );
}
