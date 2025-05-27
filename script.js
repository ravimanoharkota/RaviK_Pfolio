let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');

// Toggle day/night mode
dayNight.addEventListener("click", () => {
    banner.classList.toggle("night");
});

// Typing effect
let typingEffect = new Typed('#text', {
    strings: [" , an Embedded Systems, Linux Kernel, Wireless, Connectivity Software Developer"],
    loop: true,
    typeSpeed: 20,
    backSpeed: 10,
    backDelay: 3000,
    smartBackspace: false
});

// Open GitHub in a new tab
function openInNewTab() {
    window.open('https://github.com/ravimanoharkota', '_blank');
}

 
// Content switch for Home and About
document.addEventListener('DOMContentLoaded', function () {
    const homeTab = document.getElementById('homeTab'); // Add a home tab in your HTML if needed
    const aboutTab = document.getElementById('aboutTab');
    const contributionsTab = document.getElementById('contributionsTab');


    const content = document.getElementById('mainContent');

    // Save the initial home content for later restoration
    const initialHomeContent = content.innerHTML;

    // Function to initialize modal event listeners
    function initializeModal() {
        // Get the modal
        const modal = document.getElementById("myModal");

        // Get the button that opens the modal
        const btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        if (btn) {
            btn.onclick = function () {
                modal.style.display = "block";
                console.log("button");
                typingEffect.stop();
            };
        }

        // When the user clicks on <span> (x), close the modal
        if (span) {
            span.onclick = function () {
                modal.style.display = "none";
                typingEffect.start();
            };
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                typingEffect.start();
            }
        };
    }

    // Event listener for About tab
    aboutTab.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Replace the content with the 'About Me' content
        content.innerHTML = `
           <!-- About Me Section -->
<div class="about-section">
    <h2>About Me</h2>
    <p>A passionate and adaptable Embedded, Linux Kernel developer with a strong drive to learn on the go, embrace new challenges, 
    and continuously expand my skillset. 
    <br>
    <br>I’m not confined to what I already know, always open to exploring new technologies and solutions to deliver exceptional results and grow both personally and professionally, besides coaching juniors and sharing my knowledge and skills</p>
    <br>

    <div class="workex">
        <h2>Work Experience</h2>
        <ul class="experience-list">
            <li>
                <h4>Mediatek India</h4>
                <p><b style="color: #555;">Duration:</b> May 2014 - June 2017</p>
                <p><b style="color: #555;">Details:</b> At Mediatek, I worked in the reputed Wireless and Connectivty BU supporting wide range of wireless chipsets and router platforms such as MT7662, MT7603, MT7615 and MT7628 where I focused on improving throughput, performance of chipsets and delivered enhancements such as PSE Reset, Smart Antenna FW Emulation, Trial Channel Connection. I also had the opportunity to visit Mediatek&#39;s HQ at Taiwan and won performance award and was applauded for best team-making skills.</p>
            </li>
            <li>
                <h4>Capgemini India</h4>
                <p><b style="color: #555;">Duration:</b> Feb 2019 - Dec 2022</p>
                <p><b style="color: #555;">Details:</b> In Capgemini, as per my role as Senior Software Engineer, I worked on various Embedded and Infrastructure projects such as Ikea&#39;s Home Automation Gateway bringup, AWS Migration for Airspan&#39;s 5G hardware, Docker Containerization and porting apps for ARM64 Server platform, secure uboot hardening etc. My role at Capgemini Development in Embedded and Networking BU&#39;s revolved around developing features, bug fixes and other developmental support and unit-testing for a wide range of customer projects in Infrastructure, Connectivity and Embedded areas.I also had the opportunity to mentor junior developers and play a prominent role in the team. In Cisco&#39;s CAT9K Enterprise Switching project, I won the best peformance award for Location Aware DB enhancement </p>
            </li>
            <li>
                <h4>GTA at George Mason Uni, ECE dept</h4>
                <p><b style="color: #555;">Duration:</b> Spring 2024 and Spring 2025 Semesters</p>
                <p><b style="color: #555;">Details:</b> At George Mason University, alongside and after my Master&#39;s, I was honored to be assigned the part-time employment as Graduate Teaching Assistant for the courses of &#39;Real-Time Embedded Systems&#39; and &#39;Intoduction to Electronics and Computer Fundamentals&#39;. I contributed to grading the students&#39;s assignments, in-class supervision and support, exam evaluation, mentoring through holding weekly office hours etc, giving me another chance at reviweing the subject while grading student&#39;s work and doubt-clarification discussions.</p>
            </li>

        </ul>
    </div>

    <div class="skills">
    <h2>Skills</h2>
    <div class="skills-grid">
        <div class="skill-group">
            <h4><i class="fas fa-code"></i> Programming Languages</h4>
            <ul class="skills-list">
                <li>C</li>
                <li>CPP</li>
                 <li>Python</li>
                  <li>Shellscript</li>
                  <li>bash script</li>
            </ul>
        </div>
        <div class="skill-group">
            <h4><i class="fas fa-cogs"></i> Domains and Frameworks</h4>
            <ul class="skills-list">
                <li>Linux Kernel</li>
                <li>WLAN</li>
                <li>IOT</li>
                <li>AWS Cloud</li>
                <li>Docker containerization</li>
            </ul>
        </div>
        <div class="skill-group">
            <h4><i class="fas fa-database"></i> Testing Tools</h4>
            <ul class="skills-list">
                <li>Wireshark</li>
                 <li>Omnipeek</li>
                 <li>IxChariot</li>
                <li>CoAP</li>
             <li>MQTTExplorer, Mosquitto</li>
            </ul>
        </div>
        <div class="skill-group">
            <h4><i class="fas fa-cloud"></i> Other Tools</h4>
            <ul class="skills-list">
                <li>Git</li>
                <li>Jenkins</li>
                <li>Source Insight</li>
                <li>Perforce</li>
            <li>Coverty</li>
            </ul>
        </div>
    </div>
</div>


    <div class="edu" style="margin-top: 40px;">
        <h2>Highest Level of Education</h2>
        <ul class="education-list">
            <li>
                <h4><i class="fas fa-university"></i> George Mason University, VA, U.S.A</h4>
                <p>M.S. Computer Engineering</p>
            </li>
        </ul>
    </div>
</div>
        `;

        // Re-initialize modal functionality after content change
        initializeModal();
    });



    contributionsTab.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Update page title
    document.title = "Embedded YouTube Video";

    // Replace content with the Contributions section
    content.innerHTML = `
        <div class="contributions-section">
            <h2>5G Wireless, NR Sidelink Intro Session </h4>
            <h4>  Embedded YouTube Video </h2>
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
                <iframe 
                    src="https://www.youtube.com/embed/xS5dX2BcPpM" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                </iframe>
            </div>
        </div>
    `;
});

    // Event listener for Home tab to restore the initial home content
    homeTab.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Restore the initial home content
        content.innerHTML = initialHomeContent;

        const existingCursor = document.querySelector('.typed-cursor');
        if (existingCursor) {
            existingCursor.remove();
        }

        // Re-initialize the typing effect after restoring the content
        new Typed('#text', {
           strings: [" , an Embedded Systems, Linux Kernel, Wireless, Connectivity Software Developer"],
           loop: true,
           typeSpeed: 20,
           backSpeed: 10,
           backDelay: 3000,
           smartBackspace: false
        });
        
        // Re-initialize modal functionality after restoring content
        initializeModal();
    });

    // Initialize modal functionality when the page is first loaded
    initializeModal();
});
