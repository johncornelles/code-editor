import React, { useState, useRef } from 'react'
import logo from '../assets/logo.png'
import { RiMenuFold2Line } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import feature3 from '../assets/feature-3.webp' 
import feature2 from '../assets/feature-2.jpg' 
import works from '../assets/works1.png'
import works2 from '../assets/works2.png'
import works3 from '../assets/works3.png'
import boy from '../assets/boy.png'
import '@fortawesome/fontawesome-free/css/all.min.css';


import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@chakra-ui/react'

function LandingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showMore, setShowMore]= useState(false);
  const featuresRef = useRef(null); 

  const toggleShowMore =()=>{
    setShowMore(prevState => !prevState)
  }

  const scrollToFeatures = () => {
    window.scrollTo({ 
      top: 2300, 
      behavior: 'smooth',
    
    }); 
  }
  

  return (
    <>
      <div className='bg-black h-full min-h-screen'>
        <div>
          <div className='flex justify-between items-center'>
            <img className='h-20 w-30' src={logo} alt="logo" />
            <div className='flex justify-between w-1/4 items-center'>
              <button className='text-white'>Home</button>
              <button className='text-white' onClick={scrollToFeatures}>Features</button>
              <button className='text-white' onClick={onOpen}>FAQs</button>
              <button className='h-10 w-10 text-white text-4xl'><RiMenuFold2Line /></button>
            </div>
          </div>

          <div ref={featuresRef}>
            <p className='text-white text-4xl font-bold flex justify-center mt-10'>Empowering the Next Wave of Developers</p>
            <p className='text-white font-normal flex justify-center text-center mt-10 '>After the debut of our cutting-edge code editor and seamless cloud integration, we’re excited to announce rapid advancements in real-time collaboration <br />  and AI-driven code suggestions.</p>
            <div className='bg-gray-800 min-h-96  w-3/4 mt-80 mx-auto'></div>
            <p className='text-white text-4xl font-bold flex justify-center mt-20 '>Introducing the Developer Workspace</p>
            <p className='text-white font-normal flex justify-center mt-10 text-center'>Our code editor is redefining the developer experience with an innovative workspace. <br /> Designed with user-centric features and efficiency in mind, the full-scale workspace was showcased at the Global Developer Summit.<br /> We're also rolling out advanced customization options to tailor the workspace to individual developer needs.</p>
            <img className='flex justify-center mt-10 text-center ml-40' src={feature3} alt="feature3" />
            <div>
            <p className='text-white text-4xl font-bold flex justify-center mt-24 text-center'>Features</p>
            <p className='text-white text-2xl font-normal flex justify-center mt-10 text-center'>Powerful Editor</p>
            <p className='text-white font-normal flex justify-center mt-10 text-center'>"Elevate your coding experience with our powerful code editor,designed to enhance productivity and streamline <br />  workflows."</p>
            <p className='text-white text-2xl font-normal flex justify-center mt-20 text-center'>Collaborate Seamlessly</p>
            <img className='flex justify-center mt-10 text-center ml-72' src={feature2} alt="feature2" />
            <p className='text-white font-normal flex justify-center mt-10 text-center'>"Our code editor empowers teams to work together effortlessly, regardless of their location.​ <br />With features designed for real-time collaboration, you can share code snippets, provide instant feedback, and make simultaneous edits with ease."</p>
            <p className='text-white text-2xl font-normal flex justify-center mt-20 text-center'>Make It Yours</p>
            <p className='text-white font-normal flex justify-center mt-10 text-center'>"Customize your workspace with themes, extensions, and layouts to suit your coding style."</p>
            <button className='text-white h-10 w-60 flex justify-center items-center border bg-zinc-700 rounded-lg mt-10 mx-auto ' onClick={toggleShowMore}>
              {showMore ? 'See less features' : 'See more features'}
            </button>

            {showMore &&(
              <div>
              <p className='text-white font-normal flex justify-center mt-10 text-center '>Your coding environment should reflect your unique workflow. Customizing your workspace enhances both productivity and comfort. By tailoring your setup, <br /> you create a coding environment that aligns with your personal style and optimizes your efficiency, making coding more intuitive and enjoyable.</p>
              <p className='text-white font-normal flex justify-center mt-10 text-center'><span className='font-bold mr-4'>Themes:</span>Personalize the look and feel of your editor by selecting from a wide range of color schemes and styles.<br /> Whether you prefer a dark mode to reduce eye strain or a vibrant palette to keep you energized, the <br /> right theme can make your coding experience more enjoyable and tailored to your preferences.</p>
              <p className='text-white font-normal flex justify-center mt-10 text-center'><span className='font-bold mr-4'>Extensions:</span>Extend the functionality of your coding environment with plugins and extensions. From advanced syntax<br /> highlighting and linting tools to integrated debuggers and version control systems, extensions allow <br /> you to build a powerful toolkit that caters specifically to your development needs.</p>
              <p className='text-white font-normal flex justify-center mt-10 text-center'><span className='font-bold mr-4'>Layouts:</span>Organize your workspace by customizing the layout to match your workflow. Whether you prefer split-screen<br /> coding, floating panels, or a minimalist interface, you can arrange your editor windows and toolbars <br /> in a way that maximizes efficiency and keeps your most-used tools within easy reach.</p>
            </div>      
            )}  

              <div ref={featuresRef}>
              <p className='text-white text-2xl font-bold flex justify-center mt-24 text-center'>How It Works?</p>
              <p className='text-white font-normal flex justify-center mt-10 text-center'>We use Agile and Lean methodologies to develop a powerful, user - centric code editor. <br /> Our tool offers real-time collaboration, customization, and continuous improvements based on user feedback. <br /> Join our community and enhance your coding experience with.</p>
              
              <div className='flex justify-around items-center '>
                <div className='h-30 w-80 bg-zinc-800 rounded-lg mt-20'>
                  <p className='text-white font-bold flex justify-center text-center mt-5' >Easy Setup</p>
                  <img className='flex justify-center mt-20 text-center ml-28' src={works} alt="works" />
                  <p className='text-white font-normal flex justify-center mt-14 text-center mb-5'>Get started quickly with our easy <br /> installation and setup process. <br /> Begin coding in minutes.</p>
                </div>
                <div className='h-30 w-80 bg-zinc-800 rounded-lg mt-20 '>
                  <p className='text-white font-bold flex justify-center text-center mt-5'>Code and Collaborate</p>
                  <img className='flex justify-center mt-20 text-center ml-36 ' src={works2} alt="works2" />
                  <p className='text-white font-normal flex justify-center mt-10 text-center mb-5'>Write, debug, and deploy code <br /> with real-time collaboration. Share <br /> your workspacewith your team and <br /> work together seamlessly.</p>
                </div>
                <div className='h-30 w-80 bg-zinc-800 rounded-lg mt-20 '>
                  <p className='text-white font-bold flex justify-center text-center mt-5'>Deploy with Confidence</p>
                  <img className='flex justify-center mt-20 text-center ml-28 ' src={works3} alt="works3" />
                  <p className='text-white font-normal flex justify-center mt-10 text-center mb-5'>Deploy your code directly from<br /> the editor. Integrate with your favorite<br /> CI/CD  tools for a smooth deployment process.</p>
                </div>
              </div>

            
              <div>
                <div className='flex justify-evenly mt-32'>
                  <img className='h-20 w-32' src={logo} alt="logo" />
                  <div className='flex justify-around text-white text-3xl mt-5 '>
                    <div className="icon icon-rotate">
                      <p><FaFacebookSquare /> </p>
                    </div>
                    
                    <div>
                    <p><FaInstagramSquare /></p>
                    </div>

                    <div>
                    <p><FaTwitterSquare /></p>
                    </div>
                  </div>
                </div>
                <div className='text-white flex flex-col justify-items-center h-32 items-center'>
                <p>CONTACT US</p>
                <p>M-130, Ground Floor, Phase 8, Industrial Area, Mohali 160071</p>
                <p>+91-1234567890</p>
                <p>info@codeeditors.com</p>
                </div>
              </div>

              </div>
            </div>
          </div>

          {/* Modal with Accordion */}
          <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay />
            <ModalContent bg="gray.800" minHeight="90vh" minWidth="60vw"> 
              <ModalHeader textColor="white">Frequently Asked Questions</ModalHeader>
              <ModalCloseButton color="white" />
              <ModalBody>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as='span' flex='1' textAlign='left' textColor="white">
                          Overview
                        </Box>
                        <AccordionIcon textColor="white" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel textColor="white" pb={4}>
                      This project is a comprehensive web application featuring a powerful code editor and a code snippet sharing platform...
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as='span' flex='1' textAlign='left' textColor="white">
                          Features
                        </Box>
                        <AccordionIcon textColor="white" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel textColor="white" pb={4}>
                      <strong>Code Editor</strong>
                      <ul>
                        <li>React: Framework for building the user interface.</li>
                        <li>Monaco Editor: Advanced code editor with syntax highlighting, auto-completion, and more.</li>
                        <li>Chakra UI: A simple, modular, and accessible component library for building React applications.</li>
                        <li>Tailwind CSS: Utility-first CSS framework for rapid UI development.</li>
                        <li>DaisyUI: Tailwind CSS component library with pre-designed UI components.</li>
                      </ul>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as='span' flex='1' textAlign='left' textColor="white">
                          Usage
                        </Box>
                        <AccordionIcon textColor="white" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel textColor="white" pb={4}>
                      <strong>Code Editor:</strong> Use the editor to write and test code. The editor supports various programming languages and features syntax highlighting and auto-completion.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as='span' flex='1' textAlign='left' textColor="white">
                          Technologies Used
                        </Box>
                        <AccordionIcon textColor="white" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel textColor="white" pb={4}>
                      <ul>
                        <li><strong>React:</strong> JavaScript library for building user interfaces.</li>
                        <li><strong>Monaco Editor:</strong> Code editor for web applications.</li>
                        <li><strong>Chakra UI:</strong> UI component library.</li>
                        <li><strong>Tailwind CSS:</strong> Utility-first CSS framework.</li>
                        <li><strong>DaisyUI:</strong> Tailwind CSS component library.</li>
                        <li><strong>MongoDB:</strong> NoSQL database for storing data.</li>
                        <li><strong>Express.js:</strong> Web framework for Node.js.</li>
                        <li><strong>Node.js:</strong> JavaScript runtime for server-side code.</li>
                        <li><strong>Socket.io:</strong> Realtime communication.</li>
                      </ul>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </ModalBody>
              {/* <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter> */}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default LandingPage