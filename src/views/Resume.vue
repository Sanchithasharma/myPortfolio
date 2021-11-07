<template>
    <div class="resume">
        <div>
            <span id="my-name">SANCHITHA SR</span><br/>
            <span id="contact-info">Bengaluru | LinkedIn | +91-9620995773 | sanchitha.s.r@gmail.com</span>
        </div>


        <h3>EDUCATION:</h3>
        <el-divider></el-divider>
        <div id="college-details">
            <span>Jawaharlal Nehru College of Engineering</span>	
            <span class="place">Shimoga, KA</span>
        </div>	
        <div id="course-details">
            <span>
                Bachelor of Engineering in 
        Electronics and Communication 
            </span>
            <span>
                June-2012
            </span>
            
        </div>

        <h3>WORK EXPERIENCE:</h3>
        <el-divider></el-divider>
        <span class="company-details"><span>
            Robosoft Technologies
            </span>	 
            
            <span>
                Bengaluru, KA
            </span>
				</span>
        <span class="role-details">
					<span>
						Software Engineer L2
					</span>	
					<span>
						Jun-2020-Current
					</span>
				</span>
        
        <ul>
            <li>Develop front-end elements such as complex forms with validations, search bars, dynamic tables, tree-select etc based on the wireframe given using Vue.js, SASS and Element UI.</li>
            <li>Collaborate with Product team members, micro-services team and Quality Assurance Engineers to build, deploy and test BackOffice and Merchant Panels for a Japanese Fin-tech company (Paypay).</li>
            <li>Coordinate directly with client stakeholders to develop technical and efficient solutions for business.</li>
            <li>
                Optimize various front-end elements for loading speed and performance to ensure scalability and reusability.
            </li>
            <li>
                Document the development process on JIRA to ensure proper logging of bug reports, tickets & code changes.
            </li>
        </ul>
        
				<span class="company-details">
					<span>Tata Consultancy Services</span>	 
					<span>Bengaluru, KA</span>
        </span>
				<span class="role-details">
					<span>
						System Engineer Trainee	
					</span>
					<span>
						Dec 2016-June 2018
					</span>
				</span>
        <ul>
            <li>
                Collaborated with Web Designers, team members (of 12) and back-end developers to build an numerical
web application called Data Reduction Estimator for a Storage company (DELL Emc).
            </li>
            <li>
                Designed dynamic and multi-browser compatible pages using HTML, CSS and Angular 5+ using media queries, flexbox, CSS Grid etc.
            </li>
            <li>
                Integrated Front-end to server side of components by coordinating with back-end developers using REST API
            </li>
            <li>
                Remodelled Angular Material components such as Reactive forms, Template driven forms, Material table etc using CSS TypeScript to fit into the requirements of the client.
            </li>
            <li>
                Implemented Routers and i18n translation for the web application by collaborating with team members.
            </li>
        </ul>

        <span class="company-details">
					<span>Tata Consultancy Services</span>	 
					<span>Bengaluru, KA</span>
        </span>

				<span class="role-details">
					<span>
						System Engineer Trainee	
					</span>
					<span>
						Dec 2016-June 2018
					</span>
				</span>
				<ul>
					<li>
						Developing and designing Single Page Application UI using Web Technologies HTML, CSS and JavaScript.
					</li>
					<li>
						Assisted the team of developers in designing web applications and gained skills in aligning designs with client requirements.
					</li>
					<li>
						Coordinated with Senior Developers in debugging the code to improve app performance and user experience.
					</li>
					<li>
						Built/ Implemented reusable code and libraries for future use using Node.js and Express.js.
					</li>
				</ul>


        <h3>OTHER PROJECTS:</h3>
        <el-divider></el-divider>

        <ul>
            <li>
                Blogging on Medium and DEV: Written over 20 blogs on JavaScript, Vue.js and web development that garnered over 5k views on average. 
            </li>
            <li>
                Personal Website: https://sanchitha-sr.netlify.app
            </li>
            <li>
                Auto-filling exam forms: A web application that accepts .doc file as input, parses it and auto-fills the form with the details from the document. The application is developed using MEAN stack technologies.
            </li>
        </ul>

        <h3>SKILLS & INTERESTS</h3>
        <el-divider></el-divider>

				<div>
						<div>Web Technologies: HTML5, CSS3, JavaScript, JSON, Node.js</div>
						<div>IDE: Visual Studio Code, Atom, Bracket </div>
						<div>Framework: Vue , Angular 2+, React.js, Express.js </div>
						<div>CSS Frameworks: Bootstrap, Angular Material, Element UI, SASS</div>
						<div>Version Control: GIT</div>
						<div>Programming Languages: Typescript, Python</div>
						<div>Databases: Oracle, MangoDB</div>
				</div>

        

        <h3>Interests:</h3> Reading fiction, Cooking, Music, Blogging, Hiking



    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style scoped>
.resume {
    font-family: 'Times New Roman', Times, serif;
    margin: 10px 100px;
    
}
#my-name {
    display: flex;
    justify-content: center;
    font-size: xxx-large;
}
#contact-info {
    display: flex;
    justify-content: center;
    font-size: larger;
}
#college-details, #course-details, .company-details, .role-details {
    display: flex;
    justify-content: space-between;
}
#college-details, .company-details {
    font-weight: 800;
}

h3 {
    margin-bottom: 0;
}
.el-divider.el-divider--horizontal {
    margin-top: 0
}
.skills-and-interests {
	display: flex;
	flex-direction: row;
}
</style>