import React from 'react'
import Iframe from 'react-iframe'
import './Style.css'
import { Container,Text,useDisclosure } from '@chakra-ui/react'
import { Image,Box,Modal,ModalOverlay,ModalContent,ModalBody,ModalCloseButton } from '@chakra-ui/react'
import { Flex, Stack, Center, Link } from '@chakra-ui/react';
import Header from '../Component/Header'
function Home() 
{
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    
    // Header Starts
    <>
    <div>
    <Header />
    </div>

    <div className="MainWrap">
        <div className="center">
           <h1>Be different, work visually</h1>
           <Container maxW='700px'>
             <Text>Try the world’s most visual productivity app. Supercharge thinking, planning and learning with AI, mind maps, task boards, and more</Text>
           </Container> 
           <input  className="signupemail-input" type="email" placeholder="Enter your email" />
           <div  className="signup-surround">
           <Link href="/signAuth">
           <button type="submit" className="blueaction">Get started</button>
           </Link>
           </div>
        </div>
           
           <div>
            <Container maxW='1800px' align="center" cursor={'pointer'}>
            <Image src='https://www.ayoa.com/wp-content/uploads/2022/07/ayoa_allinone_watch.webp' alt="Ayoa - all in one creativity and productivity app" onClick={onOpen} />
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW='1000px' maxH='520px'>
            <ModalCloseButton />
            <ModalBody>
            <Iframe 
            src="https://www.youtube.com/embed/Iy49L8a8i7M?&amp;rel=0&amp;autoplay=1"
            width="920px"
            height="500px"
            display="block"
            position="relative"/>
            </ModalBody>
           </ModalContent>
            </Modal>
            </Container>
          </div>
    </div>
         {/* Header Ends */}

      <Center mt={10}>
        <Flex>
          <Stack direction={'row'} spacing="-15px">
            <Container  maxW='300px' align="center">
            <Box>
            <Image src='https://www.ayoa.com/wp-content/uploads/2018/05/cbsnews_logo.png' alt="Ayoa - all in one creativity and productivity app" />
            <Text color="#595959">“The most unique twist on task management I’ve ever seen”</Text>
            </Box >
            </Container>
            
            <Container  maxW='300px' align="center">
            <Box>
            <Image src='https://www.ayoa.com/wp-content/uploads/2018/05/techcrunch-logo.png' alt="Ayoa - all in one creativity and productivity app" />
            <Text color="#595959">“Visually-oriented people – this layout boosts productivity”</Text>
            </Box>
            </Container>

            <Container maxW='250px' align="center">
            <Box>
            <Image src='https://www.ayoa.com/wp-content/uploads/2019/09/logo-lhacker.png' alt="Ayoa - all in one creativity and productivity app" />
            <Text color="#595959">“Turns your tasks into an awesome venn diagram”</Text>
            </Box>
            </Container>
            
            <Container maxW='250px' align="center">
              <Box>
            <Image src='https://www.ayoa.com/wp-content/uploads/2019/09/logo-pcworld.png' alt="Ayoa - all in one creativity and productivity app" />
            <Text color="#595959">“A more intuitive way to manage workloads”</Text>
            </Box>
            </Container>
          </Stack>
        </Flex>         
      </Center>
      
      {/* Generate Ideas Start*/}
      
      <div id="generateideas" class="anchor"></div>

<div className="big-wrap">
<div is="generateideas-container">

<div className="flex-grid ">

<div className="col">
<h2 className="moderntitle">The world&#8217;s only
<br /> mind maps with 
<span className="marker">AI</span>
</h2>

<p id="ren" >Use one of the largest deep learning networks ever created to generate unique and innovative ideas for 
<strong>
<a id="ken" href="/ai/">anything you can think of</a>
</strong>.
</p>

<div className="gi-flexlists">
<ul className="svgticks">
<li>&#10004; Ask the right questions</li>
<li>&#10004; Breeze past blocks</li>
<li>&#10004; Explore new angles</li>
</ul>
<ul className="svgticks">
<li>&#10004; Unlock problems</li>
<li>&#10004; Mind map in full flow</li>
</ul>
</div>


<p>Take your mind maps to the next level using AI.
<br /> *Available in 
<strong id="Strong">Ayoa Ultimate only</strong>.
</p>

<a className="squarebutton" href="/ultimate/">Find out more</a>
<br />
</div>

<div>
<div className="svganimation">
<div className="generateideas-anim" preload="auto">
<iframe 
width="100%" 
height="100%" 
src="https://www.youtube.com/embed/kzccUiVF24g" 
title="Mind Mapping" 
frameborder="0" 
allow="accelerometer; 
autoplay; 
clipboard-write; 
encrypted-media; 
gyroscope; 
picture-in-picture" 
allowfullscreen>

</iframe>
</div>
</div>
</div>
</div>
<div id="generate-bg"></div>
</div>
</div>
      {/* Generate Ideas End*/}

  <div className="wrapper">

<div className="Bumbe">
<h2 className="moderndark" style={{maxwidth: "900px", margin: "30px auto"}}>Choose creativity or productivity, or why not have it all?</h2>
</div>

<div className="flexgrid">

<div className="coll nopadding" style={{flex: "1"}}>
<div className="ayoa-editions small-ed">
<div className="ed-wrapper">
<h3 id="hound" style={{fontweight: "bold", color: "#6A2FCC"}}>Ayoa Mind Map</h3>
<p id="optimus">Great for those looking to brainstorm ideas and get creative</p>
<ul className="ticks">
<li>&#10004; Organic mind maps</li>
<li>&#10004; Speed mind maps</li>
<li>&#10004; Radial maps</li>
<li>&#10004; Capture maps</li>
</ul>
</div>
<img className="edition-img" src="https://www.ayoa.com/wp-content/uploads/2022/07/mm-laptop.png" alt="Ayoa mind mapping" width="316" height="192" />
</div>
</div>

<div className="coll nopadding" style={{flex: "1"}}>
<div className="ayoa-editions small-ed">
<div className="ed-wrapper">
<h3 id="hound" style={{fontweight: "bold", color: "#73C43B"}}>Ayoa Task</h3>
<p id="optimus">Easily manage your workload and meet your deadlines</p>
<ul className="ticks">
<li>&#10004; Workflow view</li>
<li>&#10004; Canvas view</li>
<li>&#10004; Urgency lists</li>
<li>&#10004; Personal planner</li>
</ul>
</div>
<img className="edition-img" src="https://www.ayoa.com/wp-content/uploads/2022/07/canvas-laptop.png" alt="Ayoa tasks" width="296" height="192" data-ll-status="loaded" />
</div>
</div>

<div className="coll nopadding" style={{flex: "1"}}>
<div className="ayoa-editions ult-ed">
<img className="ed-aibadge" src="https://www.ayoa.com/wp-content/uploads/2022/07/nowwithai.png" alt="Now with AI badge" width="157" height="157" />

<div className="dark-section">
<img className="ultedition-img" src="https://www.ayoa.com/wp-content/uploads/2022/07/AYOA-GUY.png" alt="Ayoa ultimate suite" width="138" height="130" />
<div className="ed-wrapper">
<h3 style={{fontweight: "bold"}}>Ayoa Ultimate</h3>
<p id="optimus">The full <strong>suite</strong> of Ayoa Mind Map, Ayoa Task and more…</p>
</div>
</div>
<div className="ed-wrapper">
<ul className="ticks">
<li>&#10004; AI powered mind maps</li>
<li>&#10004; Gantt timelines</li>
<li>&#10004; Team collaboration</li>
<li>&#10004; Interactive whiteboards</li>
</ul>
</div>
</div>
</div>

</div>
<div class="center"><a class="squarebutton" href="/pricing/">See full feature comparison</a></div>

<div class="wrapper2">
<div class="Bumbe">
<h2 class="modernDark">Unrivaled <span class="markerpink">Flexibility</span></h2>
<p style={{maxwidth: "820px", margin: "0 auto"}}>Whether you’re brainstorming ideas, presenting in meetings, or managing tasks, Ayoa provides you with flexibility and intuitive working methods <strong>every step of the way</strong>.</p>
</div>
<p>&nbsp;</p>
</div>

<div className="neurodiversity_banner">

<div className="Flex-grid " style={{maxwidth:"1280px"}}>

<div>
  <Image src="https://www.ayoa.com/wp-content/uploads/2021/11/diverse_teams_ayoa-1024x862.webp"  alt="Neurodiversity image" width="900" height="758" style={{objectfit: "contain", width:"100%", height:"100%", maxwidth: "700px"}} /> 
</div>

<div className="redgear" >
<div style={{maxwidth: "800px"}}>
<h2 className="moderndark">Designed for diversity of thought</h2>
<p style={{marginbottom: "50px"}}>Diverse ideas discover alternative paths, they break moulds, they lead to breakthroughs. Discover how Ayoa’s <a href="/neurodiversity/">neuro-inclusive design</a> makes it a tool which helps different types of people work together to achieve their best work.</p>


<div className="association">
<Image style={{maxheight: "60px", objectfit: "contain"}} src="https://www.ayoa.com/wp-content/uploads/2021/07/ayoa_assistive_tech-300x120.png" alt="" width="300" height="120" className='load' />
<Image style={{maxheight: "60px", objectfit: "contain"}} src="https://www.ayoa.com/wp-content/uploads/2021/07/bata_logo-234x300.png" alt="" width="300" height="120" className='load' />
<Image style={{maxheight: "60px", objectfit: "contain"}}  src="https://www.ayoa.com/wp-content/uploads/2021/07/bda_assured@2x-300x157.png" alt="" width="300" height="157" className='load' />
</div>

</div>
</div>

</div>

</div>

</div>

<div className="ayoafull">

<div className="Tron">
<h2 className="section-heading"  style={{fontsize: "40px", margintop: "50px", marginbottom: "30px"}}>
<strong id="rio">Try<Image style={{position: "relative",top:"15px"}} src="https://www.ayoa.com/wp-content/uploads/2019/11/ayoa_logo.png" alt="Ayoa" />today</strong>
</h2>
<div className="signup-surround">
<form action="https://auth.ayoa.com/signup" method="get">
<input className="signupemail-input" type="email" name="email" placeholder="Enter your email" />
<button type="submit" className="blueaction">Get started</button>
</form>
</div>
</div>

<p>&nbsp;</p>


<div className="Tron">
<h2 className="section-heading" style={{fontsize: "25px", margintop: "50px",marginbottom: "30px"}}>
<strong>Trusted by</strong></h2>
</div>


<div className="flex-companies" style={{marginbottom: "30px"}}>

<div className="company-logo">
<Image src="https://www.ayoa.com/wp-content/uploads/2021/04/amazon_logo_new.png" width="150" height="50" alt="Amazon" className="lazyloaded" data-ll-status="loaded" />
</div>

<div className="company-logo">
<Image src="https://www.ayoa.com/wp-content/uploads/2021/04/samsung_logo_new.png" width="150" height="50" alt="Samsung" className="lazyloaded" data-ll-status="loaded" />
</div>

<div className="company-logo">
<Image src="https://www.ayoa.com/wp-content/uploads/2021/04/oracle_logo_new.png" width="150" height="50" alt="Oracle" className="lazyloaded" data-ll-status="loaded" />
</div>

<div className="company-logo">
<Image src="https://www.ayoa.com/wp-content/uploads/2021/04/continental_logo_new.png" width="150" height="50" alt="Continental" className="lazyloaded" data-ll-status="loaded" />
</div>
<div className="company-logo">
<Image src="https://www.ayoa.com/wp-content/uploads/2021/04/salesforce_logo_new.png" width="150" height="50" alt="salesforce" className="lazyloaded" data-ll-status="loaded" />
</div>

<div className="company-logo">
<Image src="https://www.ayoa.com/wp-content/uploads/2021/04/aetna_logo_new.png" width="150" height="50" alt="Aetna" className="lazyloaded" data-ll-status="loaded" />
</div>

<div className="company-logo">
<Image src="https://www.ayoa.com/wp-content/uploads/2021/04/bbc_logo_new.png" width="150" height="50" alt="BBC" className="lazyloaded" data-ll-status="loaded" />
</div>

</div>
<Center>
  <div className="Roni">
<Image src="https://www.ayoa.com/wp-content/uploads/2020/02/Stars.png" alt="Stars" className="lazyloaded" data-ll-status="loaded" />
<p id="rico" style={{fontsize: "22px", margintop: "15px", color: "white"}}>Average rating of 
<span style={{color: "#FFCA00", fontweight: "800", padding:"10px"}}>4.5 stars</span> from 
<span style={{fontweight: "800", padding:"10px"}}>1,000+</span> reviews 
<br />
<span style={{fontsize:"16px", padding:"10px"}}>across the Apple App Store, Google Play and Capterra</span>
</p>
</div>
</Center>

<footer id="main-footer">		
	<div class="footer-content">
	<div class="footer-column">
		<ul class="footer-list">
			<li class="footer-heading">Ayoa</li>	
			<li><a href="/features/">Features</a></li>
			<li><a href="/about-us/">About Us</a></li>
			<li><a href="/pricing/">Pricing</a></li>
			<li><a href="/integrations/">Integrations</a></li>
			<li class="spacebelow"><a href="/security/">Security</a></li>
		</ul>
		<ul class="footer-list">
			<li class="footer-heading">News</li>	
			<li><a href="/ourblog/">Blog</a></li>
			<li><a href="/press/">Press</a></li>
			<li><a href="/coming-soon/">Roadmap</a></li>
			<li><a href="/release-notes/">Release Notes</a></li>
		</ul>	
	</div>
	

	<div class="footer-column">
		<ul class="footer-list">
			<li class="footer-heading">Use Cases</li>	
			<li><a href="/task-management/">Task Management</a></li>
			<li><a href="/mind-mapping/">Mind Mapping</a></li>
			<li><a href="/project-management/">Project Management</a></li>
			<li><a href="/marketing/">Marketing</a></li>
			<li><a href="/finance/">Finance</a></li>
			<li><a href="/education/">Education</a></li>
			<li class="spacebelow"><a href="/neurodiversity/">Neurodiversity</a></li>
			<li><a href="/use-cases/">All Use Cases</a></li>
			<li><a href="/mind-mapping/gallery/">Mind Map Gallery</a></li>
			<li class="spacebelow"><a href="/templates/">Template Library</a></li>
			
			
			<li><a href="/ourcustomers/">Customer Success Stories</a></li>
		</ul>
	</div>
	
	<div class="footer-column">
		<ul class="footer-list">
			<li class="footer-heading">Support</li>	
			<li><a href="/support/">Help</a></li>
			<li><a href="/faq/">FAQ</a></li>
			<li><a href="/contact-us/">Contact Us</a></li>
			<li><a href="/demo/">Free Demos &amp; Webinars </a></li>
			<li><a href="/previously-droptask/">Where is DropTask?</a></li>
			<li><a href="/how-to-mind-map/">How to Mind Map</a></li>
		</ul>
	</div>
	
	<div class="footer-column">
		<ul class="footer-list">
			<li class="footer-heading">Services</li>	
			<li><a href="/applied-innovation-training/">Applied Innovation Training</a></li>
			<li><a target="_blank" rel="noopener noreferrer" href="http://trainers.opengenius.com/">Trainers</a></li>
			<li><a href="/consultancy/chris-griffiths/">Keynote Speaker</a></li>
			<li><a href="/partnerships/">Partnership Programs</a></li>
			<li><a href="/decision-radar-profiler/">Decision Radar Profiler</a></li>
		</ul>
		<ul class="footer-list">
			<li class="footer-heading">Legal</li>	
			<li><a href="/terms-and-conditions/">Terms and Conditions</a></li>
			<li><a href="/privacy-policy/">Privacy Policy</a></li>
			<li><a href="/software-license-agreement/">License Agreement</a></li>
			<li><a href="/acceptable-use-policy/">Use Policy</a></li>
		</ul>
	</div>
	

	<div class="footer-column">
		<ul class="footer-list">
			<li class="footer-heading">Download</li>	
			<li><a rel="noopener" href="https://play.google.com/store/apps/details?id=com.droptask.app">Android</a></li>
			<li><a rel="noopener" href="https://itunes.apple.com/app/droptask/id770930267">iPhone</a></li>
			<li><a rel="noopener" href="https://itunes.apple.com/app/droptask/id770930267">iPad</a></li>
			<li><a rel="noopener" href="https://ayoa.com/download/desktop/windows/">Windows (Desktop)</a></li>
			<li rel="noopener" class="spacebelow"><a href="https://ayoa.com/download/desktop/mac/">Mac (Desktop)</a></li>
			<li><a href="/apps/">All Apps</a></li>
		</ul>
	</div>
	
	</div>
	
			
	<div class="clear"></div>
	
	
	
	<div class="ayoa-approvedby">
	<Image src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/combined_logos.png" alt="London Stock Exchange Elite Programme" width="300" height="80" class="lazyloaded" data-ll-status="loaded" />

	<a rel="noopener noreferrer" href="https://www.digitalmarketplace.service.gov.uk/g-cloud/services/396592562848429/" target="_blank">
    <Image src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/gcloudsupplier@2x.png" alt="GCloud Supplier" width="125" height="80" class="lazyloaded" data-ll-status="loaded" />
    </a>
	<a rel="noopener noreferrer" href="https://bataonline.org.uk/members/profile/view/Ayoa" target="_blank">
    {/* <Image src="https://www.ayoa.com/wp-content/uploads/2022/06/bata_logo-250.png" width="65" height="80" class="lazyloaded" /></a> */}
	<Image src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/bda_assured@2x.png" alt="British Dyslexia Association" width="150" height="80" class="lazyloaded" data-ll-status="loaded" /></a>
	</div>
	
	
	
	<div class="footer-bottombar">
	<div class="footer-logos-flex">
    <Image class="footer-logo lazyloaded" src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa.svg" alt="Ayoa Footer Logo" width="300" height="50" data-ll-status="loaded" />
	<Image class="footer-logo-og lazyloaded" src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/opengenius_logo.svg" alt="OpenGenius Logo" width="350" height="50" data-ll-status="loaded" />
	</div>
	
	
	<div class="footer-socialicons">
		<ul class="ft-socialicons">
			<li>
            <a rel="noopener noreferrer" href="https://twitter.com/OfficialAyoa/" target="_blank">
            <Image src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/twitter.png" alt="Twitter Logo" width="34" height="34" class="lazyloaded" data-ll-status="loaded" />
            </a>
            </li>

			<li>
            <a rel="noopener noreferrer" href="https://www.facebook.com/AyoaApp/" target="_blank">
            <Image src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/facebook.png" alt="Facebook Logo" width="34" height="34" class="lazyloaded" data-ll-status="loaded" />
            </a>
            </li>

			<li>
            <a rel="noopener noreferrer" href="https://www.youtube.com/c/OpenGenius/" target="_blank">
            <Image src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/youtube.png" alt="Youtube Logo" width="34" height="34" class="lazyloaded" data-ll-status="loaded" />
            </a>
            </li>

			<li>
            <a rel="noopener noreferrer" href="https://www.instagram.com/officialayoa/" target="_blank">
            <Image src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/instagram.png" alt="Instagram Logo" width="34" height="34" class="lazyloaded" data-ll-status="loaded" />
            </a>
            </li>

			<li>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/ayoa-software" target="_blank">
            <Image src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/linkedin.png" alt="LinkedIN Logo" width="34" height="34" class="lazyloaded" data-ll-status="loaded" />
            </a>
            </li>
		</ul>	
	</div>
	<div class="clear"></div>
	</div>
</footer>
</div>
  </>
)}
export default Home