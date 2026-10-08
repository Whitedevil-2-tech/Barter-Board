/* =====================================================
   SKILLSWAP JAVASCRIPT
   FRONTEND ONLY
===================================================== */


/* =====================================================
   DATA
===================================================== */

const members = [

    {
        name: "Aarav Patel",
        initials: "AP",
        role: "Computer Science Student",
        skills: ["Python", "AI", "C++"]
    },

    {
        name: "Riya Shah",
        initials: "RS",
        role: "UI/UX Designer",
        skills: ["Figma", "UI Design", "Branding"]
    },

    {
        name: "Arjun Mehta",
        initials: "AM",
        role: "Full Stack Developer",
        skills: ["React", "Node.js", "MongoDB"]
    },

    {
        name: "Meera Joshi",
        initials: "MJ",
        role: "Digital Marketer",
        skills: ["SEO", "Marketing", "Content"]
    },

    {
        name: "Kabir Khan",
        initials: "KK",
        role: "Video Creator",
        skills: ["Premiere Pro", "Editing", "Reels"]
    },

    {
        name: "Ananya Desai",
        initials: "AD",
        role: "Graphic Designer",
        skills: ["Photoshop", "Illustrator", "Canva"]
    },

    {
        name: "Dev Patel",
        initials: "DP",
        role: "Data Science Student",
        skills: ["Python", "SQL", "Statistics"]
    },

    {
        name: "Sara Khan",
        initials: "SK",
        role: "Content Creator",
        skills: ["Writing", "Instagram", "Copywriting"]
    },

    {
        name: "Yash Shah",
        initials: "YS",
        role: "Cyber Security Student",
        skills: ["Linux", "Networking", "Security"]
    },

    {
        name: "Ishita Mehta",
        initials: "IM",
        role: "Business Student",
        skills: ["Excel", "Finance", "Business"]
    },

    {
        name: "Vivaan Patel",
        initials: "VP",
        role: "Web Developer",
        skills: ["HTML", "CSS", "JavaScript"]
    },

    {
        name: "Nisha Shah",
        initials: "NS",
        role: "Illustrator",
        skills: ["Drawing", "Illustration", "Art"]
    },

    {
        name: "Rehan Khan",
        initials: "RK",
        role: "Mobile Developer",
        skills: ["Flutter", "Dart", "Firebase"]
    },

    {
        name: "Diya Mehta",
        initials: "DM",
        role: "Communication Coach",
        skills: ["English", "Speaking", "Presentation"]
    },

    {
        name: "Karan Joshi",
        initials: "KJ",
        role: "Game Developer",
        skills: ["Unity", "C#", "3D"]
    },

    {
        name: "Aisha Patel",
        initials: "AI",
        role: "Photography Student",
        skills: ["Photography", "Lightroom", "Editing"]
    },

    {
        name: "Rohan Shah",
        initials: "RS",
        role: "Cloud Computing Student",
        skills: ["AWS", "Cloud", "DevOps"]
    },

    {
        name: "Maya Desai",
        initials: "MD",
        role: "Fashion Designer",
        skills: ["Fashion", "Sketching", "Design"]
    },

    {
        name: "Aditya Kumar",
        initials: "AK",
        role: "Machine Learning Student",
        skills: ["ML", "Python", "Data"]
    },

    {
        name: "Zoya Khan",
        initials: "ZK",
        role: "Social Media Manager",
        skills: ["Social Media", "Content", "Marketing"]
    }

];


let listings = [

    {
        title: "Python Programming",
        category: "Technology",
        description: "I can teach Python from fundamentals to intermediate programming.",
        exchange: "UI/UX Design",
        user: "Aarav Patel",
        initials: "AP",
        popularity: 98
    },

    {
        title: "UI/UX Design",
        category: "Design",
        description: "Learn Figma, wireframing, design systems and modern interfaces.",
        exchange: "JavaScript",
        user: "Riya Shah",
        initials: "RS",
        popularity: 96
    },

    {
        title: "Video Editing",
        category: "Creative",
        description: "Learn Premiere Pro and create professional short-form videos.",
        exchange: "Photography",
        user: "Kabir Khan",
        initials: "KK",
        popularity: 94
    },

    {
        title: "Digital Marketing",
        category: "Marketing",
        description: "Learn social media strategy, SEO and content marketing.",
        exchange: "Graphic Design",
        user: "Meera Joshi",
        initials: "MJ",
        popularity: 91
    },

    {
        title: "C++ Programming",
        category: "Technology",
        description: "Object-oriented programming and DSA fundamentals.",
        exchange: "Video Editing",
        user: "Dev Patel",
        initials: "DP",
        popularity: 89
    },

    {
        title: "Photoshop",
        category: "Design",
        description: "Learn professional photo manipulation and creative design.",
        exchange: "Python",
        user: "Ananya Desai",
        initials: "AD",
        popularity: 87
    },

    {
        title: "Excel & Data Analysis",
        category: "Business",
        description: "Learn spreadsheets, formulas, charts and basic analysis.",
        exchange: "Web Development",
        user: "Ishita Mehta",
        initials: "IM",
        popularity: 84
    },

    {
        title: "JavaScript",
        category: "Technology",
        description: "Build interactive websites using modern JavaScript.",
        exchange: "Graphic Design",
        user: "Vivaan Patel",
        initials: "VP",
        popularity: 82
    },

    {
        title: "Content Writing",
        category: "Marketing",
        description: "Learn copywriting, captions and long-form content writing.",
        exchange: "Video Editing",
        user: "Sara Khan",
        initials: "SK",
        popularity: 80
    },

    {
        title: "Cyber Security",
        category: "Technology",
        description: "Learn Linux, networking and basic security concepts.",
        exchange: "Python",
        user: "Yash Shah",
        initials: "YS",
        popularity: 78
    },

    {
        title: "English Speaking",
        category: "Academic",
        description: "Improve communication, presentation and speaking skills.",
        exchange: "Photoshop",
        user: "Diya Mehta",
        initials: "DM",
        popularity: 76
    },

    {
        title: "Photography",
        category: "Creative",
        description: "Learn composition, camera basics and Lightroom editing.",
        exchange: "Social Media",
        user: "Aisha Patel",
        initials: "AI",
        popularity: 73
    }

];


const incomingRequests = [

    {
        name: "Riya Shah",
        initials: "RS",
        role: "UI/UX Designer",
        offer: "UI/UX Design",
        want: "JavaScript"
    },

    {
        name: "Kabir Khan",
        initials: "KK",
        role: "Video Creator",
        offer: "Video Editing",
        want: "C++"
    },

    {
        name: "Meera Joshi",
        initials: "MJ",
        role: "Digital Marketer",
        offer: "Digital Marketing",
        want: "Photoshop"
    },

    {
        name: "Aisha Patel",
        initials: "AI",
        role: "Photography Student",
        offer: "Photography",
        want: "Web Development"
    }

];


const sentRequests = [

    {
        name: "Arjun Mehta",
        initials: "AM",
        role: "Full Stack Developer",
        offer: "JavaScript",
        want: "React"
    },

    {
        name: "Nisha Shah",
        initials: "NS",
        role: "Illustrator",
        offer: "Illustration",
        want: "Python"
    },

    {
        name: "Rohan Shah",
        initials: "RS",
        role: "Cloud Computing Student",
        offer: "AWS",
        want: "C++"
    }

];


const acceptedRequests = [

    {
        name: "Aditya Kumar",
        initials: "AK",
        role: "Machine Learning Student",
        offer: "Machine Learning",
        want: "Web Development"
    },

    {
        name: "Zoya Khan",
        initials: "ZK",
        role: "Social Media Manager",
        offer: "Social Media",
        want: "Video Editing"
    }

];


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active-page");

    });


    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    document.querySelectorAll(".nav-btn").forEach(button => {

        button.classList.remove("active");

    });


    const activeNav = document.getElementById("nav-" + pageId);

    if (activeNav) {

        activeNav.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (pageId === "explore") {

        renderListings();

    }


    if (pageId === "members") {

        renderMembers();

    }


    if (pageId === "requests") {

        renderRequests("incoming");

    }

}


/* =====================================================
   NOTIFICATIONS
===================================================== */

function toggleNotifications() {

    const panel =
        document.getElementById("notificationPanel");

    panel.classList.toggle("show");

}


/* =====================================================
   PROFILE
===================================================== */

function openProfile() {

    document
        .getElementById("profileModal")
        .classList.add("show");

}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("show");

}


/* =====================================================
   POST SKILL
===================================================== */

function openPostModal() {

    document
        .getElementById("postModal")
        .classList.add("show");

}


function createListing(event) {

    event.preventDefault();


    const name =
        document.getElementById("skillName").value;

    const category =
        document.getElementById("skillCategory").value;

    const exchange =
        document.getElementById("skillExchange").value;

    const description =
        document.getElementById("skillDescription").value;


    listings.unshift({

        title: name,

        category: category,

        description: description,

        exchange: exchange,

        user: "Faizan Shaikh",

        initials: "FS",

        popularity: 100

    });


    closeModal("postModal");


    document.querySelector("form").reset();


    showToast(
        "Skill Published",
        "Your skill has been added to the SkillSwap network."
    );


    renderListings();

}


/* =====================================================
   LISTINGS
===================================================== */

function renderListings(data = listings) {

    const grid =
        document.getElementById("listingGrid");

    if (!grid) return;


    grid.innerHTML = "";


    data.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "listing-card";


        card.innerHTML = `

            <span class="listing-category">
                ${item.category.toUpperCase()}
            </span>

            <h3>${item.title}</h3>

            <p>${item.description}</p>

            <div class="swap-line">

                <small>WANTS IN EXCHANGE</small>

                <strong>${item.exchange}</strong>

            </div>

            <div class="listing-footer">

                <div class="user-mini">

                    <span>${item.initials}</span>

                    <small>${item.user}</small>

                </div>

                <button
                    class="request-btn"
                    onclick="sendRequest('${item.title}', '${item.user}')"
                >
                    Request Swap
                </button>

            </div>

        `;


        grid.appendChild(card);

    });


    document.getElementById("resultCount").textContent =
        `${data.length} skills available`;

}


/* =====================================================
   SEARCH LISTINGS
===================================================== */

function searchListings() {

    const query =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const category =
        document
            .getElementById("categoryFilter")
            .value;


    const filtered = listings.filter(item => {

        const matchesSearch =

            item.title.toLowerCase().includes(query) ||

            item.description.toLowerCase().includes(query) ||

            item.exchange.toLowerCase().includes(query) ||

            item.user.toLowerCase().includes(query);


        const matchesCategory =

            category === "all" ||

            item.category === category;


        return matchesSearch && matchesCategory;

    });


    renderListings(filtered);

}


function filterListings() {

    searchListings();

}


function setSort(type) {

    let sorted = [...listings];


    if (type === "popular") {

        sorted.sort(
            (a,b) => b.popularity - a.popularity
        );

    }


    if (type === "newest") {

        sorted.reverse();

    }


    renderListings(sorted);

}


/* =====================================================
   SEND REQUEST
===================================================== */

function sendRequest(skill, user) {

    showToast(
        "Request Sent",
        `Your request for ${skill} was sent to ${user}.`
    );

}


/* =====================================================
   MEMBERS
===================================================== */

function renderMembers(data = members) {

    const grid =
        document.getElementById("memberGrid");

    if (!grid) return;


    grid.innerHTML = "";


    data.forEach(member => {

        const card = document.createElement("div");

        card.className = "member-card";


        card.innerHTML = `

            <div class="member-avatar">
                ${member.initials}
            </div>

            <h3>${member.name}</h3>

            <p>${member.role}</p>

            <div class="member-skills">

                ${member.skills
                    .map(skill =>
                        `<span>${skill}</span>`
                    )
                    .join("")}

            </div>

            <button
                class="request-btn"
                style="margin-top:18px;width:100%"
                onclick="connectMember('${member.name}')"
            >
                View Profile
            </button>

        `;


        grid.appendChild(card);

    });

}


function searchMembers() {

    const query =

        document
            .getElementById("memberSearch")
            .value
            .toLowerCase();


    const filtered = members.filter(member =>

        member.name.toLowerCase().includes(query) ||

        member.role.toLowerCase().includes(query) ||

        member.skills.some(skill =>
            skill.toLowerCase().includes(query)
        )

    );


    renderMembers(filtered);

}


function connectMember(name) {

    showToast(
        "Profile Selected",
        `Opening ${name}'s SkillSwap profile.`
    );

}


/* =====================================================
   REQUESTS
===================================================== */

function renderRequests(type) {

    const container =
        document.getElementById("requestsContainer");

    if (!container) return;


    let data;


    if (type === "incoming") {

        data = incomingRequests;

    }

    else if (type === "sent") {

        data = sentRequests;

    }

    else {

        data = acceptedRequests;

    }


    container.innerHTML = "";


    data.forEach((request, index) => {

        const card =
            document.createElement("div");


        card.className = "request-card";


        let actions = "";


        if (type === "incoming") {

            actions = `

                <div class="request-actions">

                    <button
                        class="accept-btn"
                        onclick="acceptRequest(${index})"
                    >
                        Accept
                    </button>

                    <button
                        class="reject-btn"
                        onclick="rejectRequest(${index})"
                    >
                        Decline
                    </button>

                </div>

            `;

        }


        else if (type === "sent") {

            actions = `

                <div class="request-actions">

                    <button
                        class="reject-btn"
                        onclick="cancelRequest('${request.name}')"
                    >
                        Cancel Request
                    </button>

                </div>

            `;

        }


        else {

            actions = `

                <div class="request-actions">

                    <button
                        class="accept-btn"
                        onclick="showToast('Swap Opened','Your active skill exchange is ready.')"
                    >
                        Open Swap
                    </button>

                </div>

            `;

        }


        card.innerHTML = `

            <div class="request-user">

                <div class="request-avatar">
                    ${request.initials}
                </div>

                <div>

                    <h3>${request.name}</h3>

                    <p>${request.role}</p>

                </div>

            </div>


            <div class="request-swap">

                <div class="request-skill">

                    <small>OFFERING</small>

                    <strong>${request.offer}</strong>

                </div>

                <span class="swap-arrow">⇄</span>

                <div class="request-skill">

                    <small>WANTS</small>

                    <strong>${request.want}</strong>

                </div>

            </div>


            ${actions}

        `;


        container.appendChild(card);

    });

}


function showRequestTab(type) {

    document
        .querySelectorAll(".request-tab")
        .forEach(button =>
            button.classList.remove("active-tab")
        );


    event.currentTarget.classList.add("active-tab");


    renderRequests(type);

}


function acceptRequest(index) {

    const request =
        incomingRequests[index];


    showToast(
        "Swap Accepted",
        `You are now connected with ${request.name}.`
    );


    incomingRequests.splice(index,1);


    const count =
        document.getElementById("requestCount");


    count.textContent =
        incomingRequests.length;


    renderRequests("incoming");

}


function rejectRequest(index) {

    const request =
        incomingRequests[index];


    incomingRequests.splice(index,1);


    showToast(
        "Request Declined",
        `${request.name}'s request was declined.`
    );


    document.getElementById("requestCount").textContent =
        incomingRequests.length;


    renderRequests("incoming");

}


function cancelRequest(name) {

    showToast(
        "Request Cancelled",
        `Your request to ${name} has been cancelled.`
    );

}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(title, message) {

    const toast =
        document.getElementById("toast");


    document.getElementById("toastTitle")
        .textContent = title;


    document.getElementById("toastMessage")
        .textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}


/* =====================================================
   FEATURED SKILLS
===================================================== */

function renderFeatured() {

    const container =
        document.getElementById("featuredSkills");

    if (!container) return;


    const featured = listings.slice(0,4);


    container.innerHTML = "";


    featured.forEach((skill, index) => {

        const icons = [
            "⌘",
            "✦",
            "▶",
            "◎"
        ];


        const card =
            document.createElement("div");


        card.className = "skill-card";


        card.innerHTML = `

            <div class="skill-icon">
                ${icons[index]}
            </div>

            <h3>${skill.title}</h3>

            <p>
                ${skill.description}
            </p>

            <div class="skill-meta">

                <span>${skill.category}</span>

                <strong>
                    ${skill.popularity}% match
                </strong>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   MODAL CLICK OUTSIDE
===================================================== */

document.addEventListener("click", function(event) {

    if (
        event.target.classList.contains("modal")
    ) {

        event.target.classList.remove("show");

    }

});


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    renderFeatured();

    renderListings();

    renderMembers();

    renderRequests("incoming");


    setTimeout(() => {

        document
            .getElementById("loader")
            .style.display = "none";

    }, 2400);

});
