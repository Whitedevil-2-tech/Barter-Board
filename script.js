```javascript
/* =========================================================
   SKILLSWAP — FRONTEND APPLICATION
   No PHP / No MySQL
   Uses JavaScript + localStorage
   ========================================================= */


/* =========================================================
   DUMMY MEMBERS
   ========================================================= */

const members = [
    {
        id: 1,
        name: "Aarav Mehta",
        role: "Full Stack Developer",
        offer: "Python",
        want: "UI/UX Design",
        skills: ["Python", "React", "Node.js"],
        location: "Ahmedabad",
        bio: "Building web applications and always looking to improve my design skills.",
        online: true
    },

    {
        id: 2,
        name: "Riya Patel",
        role: "UI/UX Designer",
        offer: "Figma",
        want: "Python",
        skills: ["Figma", "UI Design", "Branding"],
        location: "Ahmedabad",
        bio: "I turn ideas into clean and meaningful digital experiences.",
        online: true
    },

    {
        id: 3,
        name: "Arjun Shah",
        role: "Frontend Developer",
        offer: "React",
        want: "Video Editing",
        skills: ["React", "JavaScript", "CSS"],
        location: "Mumbai",
        bio: "Frontend enthusiast who loves creating interactive experiences.",
        online: true
    },

    {
        id: 4,
        name: "Meera Joshi",
        role: "Content Creator",
        offer: "Video Editing",
        want: "Digital Marketing",
        skills: ["Premiere Pro", "CapCut", "Content"],
        location: "Delhi",
        bio: "Content creator helping brands tell better stories.",
        online: false
    },

    {
        id: 5,
        name: "Kabir Verma",
        role: "Data Science Student",
        offer: "Python",
        want: "Graphic Design",
        skills: ["Python", "Pandas", "Machine Learning"],
        location: "Pune",
        bio: "Learning data science one project at a time.",
        online: true
    },

    {
        id: 6,
        name: "Ananya Rao",
        role: "Graphic Designer",
        offer: "Photoshop",
        want: "Web Development",
        skills: ["Photoshop", "Illustrator", "Canva"],
        location: "Bangalore",
        bio: "Visual designer who enjoys collaborating with developers.",
        online: true
    },

    {
        id: 7,
        name: "Dev Malhotra",
        role: "Marketing Student",
        offer: "Digital Marketing",
        want: "Video Editing",
        skills: ["SEO", "Marketing", "Analytics"],
        location: "Jaipur",
        bio: "Interested in growth, marketing and creative storytelling.",
        online: false
    },

    {
        id: 8,
        name: "Zoya Khan",
        role: "Illustrator",
        offer: "Illustration",
        want: "Photography",
        skills: ["Illustration", "Procreate", "Sketching"],
        location: "Ahmedabad",
        bio: "Digital illustrator looking to explore photography.",
        online: true
    },

    {
        id: 9,
        name: "Yash Desai",
        role: "Cybersecurity Student",
        offer: "Cybersecurity",
        want: "Public Speaking",
        skills: ["Networking", "Linux", "Cybersecurity"],
        location: "Surat",
        bio: "Cybersecurity learner passionate about ethical hacking.",
        online: true
    },

    {
        id: 10,
        name: "Ishita Kapoor",
        role: "Business Student",
        offer: "Excel",
        want: "Python",
        skills: ["Excel", "PowerPoint", "Business"],
        location: "Delhi",
        bio: "Business student exploring automation and technology.",
        online: false
    },

    {
        id: 11,
        name: "Dhruv Patel",
        role: "Mobile Developer",
        offer: "Flutter",
        want: "UI Design",
        skills: ["Flutter", "Dart", "Firebase"],
        location: "Vadodara",
        bio: "Building mobile apps and looking for creative design partners.",
        online: true
    },

    {
        id: 12,
        name: "Sara Thomas",
        role: "Photographer",
        offer: "Photography",
        want: "Social Media Marketing",
        skills: ["Photography", "Lightroom", "Portraits"],
        location: "Goa",
        bio: "Photographer specializing in portraits and lifestyle shoots.",
        online: true
    },

    {
        id: 13,
        name: "Neil Kapoor",
        role: "Java Developer",
        offer: "Java",
        want: "Public Speaking",
        skills: ["Java", "Spring", "SQL"],
        location: "Hyderabad",
        bio: "Backend developer working towards becoming a better communicator.",
        online: false
    },

    {
        id: 14,
        name: "Priya Nair",
        role: "Product Designer",
        offer: "Product Design",
        want: "Frontend Development",
        skills: ["Figma", "UX Research", "Wireframing"],
        location: "Kochi",
        bio: "Product designer interested in learning how interfaces are built.",
        online: true
    },

    {
        id: 15,
        name: "Rehan Sheikh",
        role: "Video Editor",
        offer: "Premiere Pro",
        want: "Motion Graphics",
        skills: ["Premiere Pro", "DaVinci", "Editing"],
        location: "Mumbai",
        bio: "Video editor looking to level up motion graphics skills.",
        online: true
    },

    {
        id: 16,
        name: "Tanya Singh",
        role: "English Tutor",
        offer: "English",
        want: "Graphic Design",
        skills: ["English", "Communication", "Writing"],
        location: "Lucknow",
        bio: "Helping students communicate confidently.",
        online: false
    },

    {
        id: 17,
        name: "Aditya Jain",
        role: "Cloud Student",
        offer: "AWS",
        want: "Python",
        skills: ["AWS", "Cloud", "Linux"],
        location: "Indore",
        bio: "Cloud enthusiast learning automation and scripting.",
        online: true
    },

    {
        id: 18,
        name: "Simran Kaur",
        role: "Social Media Manager",
        offer: "Social Media",
        want: "Photography",
        skills: ["Instagram", "Content", "Marketing"],
        location: "Chandigarh",
        bio: "Helping creators and businesses grow online.",
        online: true
    },

    {
        id: 19,
        name: "Om Trivedi",
        role: "C++ Developer",
        offer: "C++",
        want: "UI/UX Design",
        skills: ["C++", "DSA", "Algorithms"],
        location: "Ahmedabad",
        bio: "Competitive programming enthusiast and DSA learner.",
        online: false
    },

    {
        id: 20,
        name: "Nisha Gupta",
        role: "HR Student",
        offer: "Interview Skills",
        want: "Excel",
        skills: ["HR", "Communication", "Interviews"],
        location: "Noida",
        bio: "Interested in people, communication and career development.",
        online: true
    }
];


/* =========================================================
   LISTINGS
   ========================================================= */

const listings = [
    {
        user: 1,
        category: "Development",
        offer: "Python",
        want: "UI/UX Design",
        description: "Can teach Python from fundamentals to real-world projects."
    },

    {
        user: 2,
        category: "Design",
        offer: "Figma",
        want: "Python",
        description: "I can teach modern UI design and Figma workflows."
    },

    {
        user: 3,
        category: "Development",
        offer: "React",
        want: "Video Editing",
        description: "Looking to exchange frontend development knowledge."
    },

    {
        user: 4,
        category: "Creative",
        offer: "Video Editing",
        want: "Digital Marketing",
        description: "Premiere Pro and CapCut editing for marketing guidance."
    },

    {
        user: 5,
        category: "Development",
        offer: "Python",
        want: "Graphic Design",
        description: "Python, automation and beginner machine learning."
    },

    {
        user: 6,
        category: "Design",
        offer: "Graphic Design",
        want: "Web Development",
        description: "Photoshop, Illustrator and branding in exchange for coding."
    },

    {
        user: 7,
        category: "Business",
        offer: "Digital Marketing",
        want: "Video Editing",
        description: "SEO, Instagram strategy and analytics."
    },

    {
        user: 8,
        category: "Creative",
        offer: "Illustration",
        want: "Photography",
        description: "Digital illustration and Procreate techniques."
    },

    {
        user: 9,
        category: "Development",
        offer: "Cybersecurity",
        want: "Public Speaking",
        description: "Networking, Linux and cybersecurity basics."
    },

    {
        user: 10,
        category: "Business",
        offer: "Excel",
        want: "Python",
        description: "Excel formulas, dashboards and data organization."
    },

    {
        user: 11,
        category: "Development",
        offer: "Flutter",
        want: "UI Design",
        description: "Mobile development with Flutter and Dart."
    },

    {
        user: 12,
        category: "Creative",
        offer: "Photography",
        want: "Social Media Marketing",
        description: "Portrait and lifestyle photography."
    },

    {
        user: 13,
        category: "Development",
        offer: "Java",
        want: "Public Speaking",
        description: "Java and Spring backend development."
    },

    {
        user: 14,
        category: "Design",
        offer: "Product Design",
        want: "Frontend Development",
        description: "UX research, wireframes and product design."
    },

    {
        user: 15,
        category: "Creative",
        offer: "Video Editing",
        want: "Motion Graphics",
        description: "Premiere Pro and professional video editing."
    },

    {
        user: 16,
        category: "Academic",
        offer: "English",
        want: "Graphic Design",
        description: "Spoken English, grammar and communication."
    },

    {
        user: 17,
        category: "Development",
        offer: "AWS",
        want: "Python",
        description: "AWS cloud fundamentals and deployment."
    },

    {
        user: 18,
        category: "Business",
        offer: "Social Media",
        want: "Photography",
        description: "Instagram growth and content strategy."
    },

    {
        user: 19,
        category: "Development",
        offer: "C++",
        want: "UI/UX Design",
        description: "C++, DSA and competitive programming."
    },

    {
        user: 20,
        category: "Business",
        offer: "Interview Skills",
        want: "Excel",
        description: "Mock interviews and communication improvement."
    }
];


/* =========================================================
   REQUESTS
   ========================================================= */

let requests = [
    {
        id: 1,
        type: "incoming",
        from: 2,
        message: "I'd love to learn Python from you.",
        offer: "Figma",
        want: "Python",
        status: "Pending"
    },

    {
        id: 2,
        type: "incoming",
        from: 7,
        message: "Can we exchange marketing and editing skills?",
        offer: "Digital Marketing",
        want: "Video Editing",
        status: "Pending"
    },

    {
        id: 3,
        type: "incoming",
        from: 12,
        message: "Interested in your content strategy skills.",
        offer: "Photography",
        want: "Social Media Marketing",
        status: "Pending"
    },

    {
        id: 4,
        type: "outgoing",
        from: 14,
        message: "Would love to learn product design.",
        offer: "C++ / DSA",
        want: "Product Design",
        status: "Pending"
    },

    {
        id: 5,
        type: "outgoing",
        from: 4,
        message: "Interested in learning video editing.",
        offer: "Digital Marketing",
        want: "Video Editing",
        status: "Pending"
    },

    {
        id: 6,
        type: "accepted",
        from: 3,
        message: "Let's start our React exchange.",
        offer: "React",
        want: "Video Editing",
        status: "Accepted"
    },

    {
        id: 7,
        type: "accepted",
        from: 6,
        message: "Design and coding exchange confirmed.",
        offer: "C++",
        want: "Graphic Design",
        status: "Accepted"
    }
];


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active-page");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active-page");
    }

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + pageId) {
            link.classList.add("active");
        }
    });

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


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMobileMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
}


/* =========================================================
   PRELOADER
   ========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("preloader").classList.add("hide");
    }, 800);

    animateStats();

    renderListings();
    renderMembers();
});


/* =========================================================
   COUNTER ANIMATION
   ========================================================= */

function animateStats() {

    document.querySelectorAll(".stat-number").forEach(counter => {

        const target = Number(counter.dataset.count);
        let current = 0;

        const increment = target / 70;

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {
                counter.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString();
            }

        }, 25);
    });
}


/* =========================================================
   LISTINGS
   ========================================================= */

function renderListings(category = "all", search = "") {

    const grid = document.getElementById("listingGrid");

    if (!grid) return;

    let data = listings;

    if (category !== "all") {
        data = data.filter(item => item.category === category);
    }

    if (search.trim()) {

        const query = search.toLowerCase();

        data = data.filter(item => {

            const user = members.find(m => m.id === item.user);

            return (
                item.offer.toLowerCase().includes(query) ||
                item.want.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                user.name.toLowerCase().includes(query)
            );
        });
    }

    grid.innerHTML = "";

    if (!data.length) {

        grid.innerHTML = `
            <div class="empty-state">
                <h3>No skills found</h3>
                <p>Try another keyword or category.</p>
            </div>
        `;

        return;
    }

    data.forEach(item => {

        const user = members.find(m => m.id === item.user);

        const card = document.createElement("div");

        card.className = "listing-card";

        card.innerHTML = `
            <div class="listing-head">

                <div class="user-avatar">
                    ${getInitials(user.name)}
                </div>

                <div class="listing-user">
                    <strong>${user.name}</strong>
                    <small>${user.role}</small>
                </div>

                ${user.online ? `<span class="online"></span>` : ""}
            </div>

            <div class="swap-box">

                <div class="swap-side">
                    <label>OFFERS</label>
                    <strong>${item.offer}</strong>
                </div>

                <div class="swap-arrow">⇄</div>

                <div class="swap-side">
                    <label>WANTS</label>
                    <strong>${item.want}</strong>
                </div>

            </div>

            <p class="listing-description">
                ${item.description}
            </p>

            <div class="listing-footer">

                <button
                    class="profile-link"
                    onclick="openProfile(${user.id})"
                >
                    View profile
                </button>

                <button
                    class="btn btn-primary"
                    onclick="sendRequest(${user.id}, '${escapeQuotes(item.offer)}', '${escapeQuotes(item.want)}')"
                >
                    Request Swap
                </button>

            </div>
        `;

        grid.appendChild(card);
    });
}


/* =========================================================
   SEARCH / FILTER
   ========================================================= */

let selectedCategory = "all";

function filterSkills() {

    const search = document.getElementById("skillSearch").value;

    renderListings(selectedCategory, search);
}

function filterCategory(category, button) {

    selectedCategory = category;

    document.querySelectorAll(".filter").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    const search = document.getElementById("skillSearch").value;

    renderListings(category, search);
}


/* =========================================================
   MEMBERS
   ========================================================= */

function renderMembers(search = "") {

    const grid = document.getElementById("memberGrid");

    if (!grid) return;

    let data = members;

    if (search.trim()) {

        const query = search.toLowerCase();

        data = members.filter(member =>
            member.name.toLowerCase().includes(query) ||
            member.role.toLowerCase().includes(query) ||
            member.offer.toLowerCase().includes(query) ||
            member.want.toLowerCase().includes(query) ||
            member.location.toLowerCase().includes(query)
        );
    }

    grid.innerHTML = "";

    data.forEach(member => {

        const card = document.createElement("div");

        card.className = "member-card";

        card.innerHTML = `
            <div class="user-avatar">
                ${getInitials(member.name)}
            </div>

            <h3>${member.name}</h3>

            <div class="member-role">
                ${member.role} · ${member.location}
            </div>

            <div class="member-skills">

                ${member.skills.map(skill =>
                    `<span class="skill-pill">${skill}</span>`
                ).join("")}

            </div>

            <button
                class="btn btn-glass"
                onclick="openProfile(${member.id})"
            >
                View Profile
            </button>
        `;

        grid.appendChild(card);
    });
}

function filterMembers() {

    const value = document.getElementById("memberSearch").value;

    renderMembers(value);
}


/* =========================================================
   PROFILE
   ========================================================= */

function openProfile(id) {

    const member = members.find(m => m.id === id);

    if (!member) return;

    const content = document.getElementById("profileContent");

    content.innerHTML = `
        <div class="profile-top">

            <div class="user-avatar">
                ${getInitials(member.name)}
            </div>

            <h2>${member.name}</h2>

            <p>
                ${member.role} · ${member.location}
            </p>

        </div>

        <p class="profile-bio">
            ${member.bio}
        </p>

        <div class="profile-skills-title">
            Skills offered
        </div>

        <div class="profile-skills">
            ${member.skills.map(skill =>
                `<span class="skill-pill">${skill}</span>`
            ).join("")}
        </div>

        <div class="swap-box" style="margin-top:22px;">

            <div class="swap-side">
                <label>OFFERS</label>
                <strong>${member.offer}</strong>
            </div>

            <div class="swap-arrow">⇄</div>

            <div class="swap-side">
                <label>WANTS</label>
                <strong>${member.want}</strong>
            </div>

        </div>

        <button
            class="btn btn-primary"
            style="width:100%;margin-top:20px;"
            onclick="sendRequest(${member.id}, '${escapeQuotes(member.offer)}', '${escapeQuotes(member.want)}')"
        >
            Send Swap Request →
        </button>
    `;

    document.getElementById("profileModal").classList.add("show");
}


/* =========================================================
   SEND REQUEST
   ========================================================= */

function sendRequest(userId, offer, want) {

    const user = members.find(m => m.id === userId);

    if (!user) return;

    const newRequest = {

        id: Date.now(),

        type: "outgoing",

        from: userId,

        message: `I would like to exchange ${want} for ${offer}.`,

        offer: want,

        want: offer,

        status: "Pending"
    };

    requests.unshift(newRequest);

    saveRequests();

    closeModal("profileModal");

    showToast(`Swap request sent to ${user.name}!`);

    updateRequestCount();
}


/* =========================================================
   REQUESTS
   ========================================================= */

function switchRequestTab(tab, button) {

    document.querySelectorAll(".request-tab").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    renderRequests(tab);
}


function renderRequests(type) {

    const container = document.getElementById("requestsList");

    if (!container) return;

    const data = requests.filter(request => request.type === type);

    container.innerHTML = "";

    if (!data.length) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>No requests here</h3>
                <p>Your connections will appear here.</p>
            </div>
        `;

        return;
    }

    data.forEach(request => {

        const user = members.find(member => member.id === request.from);

        const card = document.createElement("div");

        card.className = "request-card";

        let actions = "";

        if (type === "incoming") {

            actions = `
                <div class="request-actions">
                    <button
                        class="accept-btn"
                        onclick="acceptRequest(${request.id})"
                    >
                        Accept
                    </button>

                    <button
                        class="reject-btn"
                        onclick="rejectRequest(${request.id})"
                    >
                        Reject
                    </button>
                </div>
            `;

        } else if (type === "outgoing") {

            actions = `
                <div class="request-actions">
                    <button
                        class="reject-btn"
                        onclick="cancelRequest(${request.id})"
                    >
                        Cancel
                    </button>
                </div>
            `;

        } else {

            actions = `
                <div class="request-actions">
                    <button
                        class="accept-btn"
                        onclick="openProfile(${user.id})"
                    >
                        Open Profile
                    </button>
                </div>
            `;
        }

        card.innerHTML = `

            <div class="user-avatar">
                ${getInitials(user.name)}
            </div>

            <div class="request-info">

                <strong>${user.name}</strong>

                <p>
                    ${user.role} · ${user.location}
                </p>

                <div class="request-swap">
                    ${request.offer} ⇄ ${request.want}
                </div>

            </div>

            ${actions}
        `;

        container.appendChild(card);
    });
}


function acceptRequest(id) {

    const request = requests.find(r => r.id === id);

    if (!request) return;

    request.type = "accepted";
    request.status = "Accepted";

    saveRequests();

    renderRequests("incoming");

    showToast("Swap request accepted!");
    updateRequestCount();
}


function rejectRequest(id) {

    requests = requests.filter(request => request.id !== id);

    saveRequests();

    renderRequests("incoming");

    showToast("Request rejected.");
    updateRequestCount();
}


function cancelRequest(id) {

    requests = requests.filter(request => request.id !== id);

    saveRequests();

    renderRequests("outgoing");

    showToast("Request cancelled.");
    updateRequestCount();
}


function updateRequestCount() {

    const pending = requests.filter(r => r.status === "Pending").length;

    const count = document.getElementById("pendingCount");

    if (count) {
        count.textContent = pending;
    }
}


/* =========================================================
   AUTHENTICATION UI
   ========================================================= */

let authMode = "login";

function openAuth(mode) {

    authMode = mode;

    updateAuthModal();

    document.getElementById("authModal").classList.add("show");
}

function toggleAuthMode() {

    authMode = authMode === "login" ? "register" : "login";

    updateAuthModal();
}


function updateAuthModal() {

    const register = authMode === "register";

    document.getElementById("authTitle").textContent =
        register ? "Join SkillSwap." : "Welcome back.";

    document.getElementById("authSubtitle").textContent =
        register
            ? "Create your profile and start exchanging knowledge."
            : "Sign in to continue your skill journey.";

    document.getElementById("authButtonText").textContent =
        register ? "Create Account" : "Sign In";

    document.getElementById("nameField").classList.toggle(
        "hidden",
        !register
    );

    document.getElementById("skillFields").classList.toggle(
        "hidden",
        !register
    );

    document.getElementById("authSwitchText").textContent =
        register
            ? "Already have an account?"
            : "Don't have an account?";

    document.getElementById("authSwitchButton").textContent =
        register
            ? "Sign in"
            : "Create one";
}


function handleAuth(event) {

    event.preventDefault();

    const email = document.getElementById("authEmail").value;

    if (authMode === "register") {

        const name = document.getElementById("authName").value;
        const offer = document.getElementById("offerSkill").value;
        const want = document.getElementById("wantSkill").value;

        if (!name || !offer || !want) {

            showToast("Please complete all profile fields.");

            return;
        }

        const customMember = {

            id: Date.now(),

            name: name,

            role: "New SkillSwap Member",

            offer: offer,

            want: want,

            skills: [offer],

            location: "Online",

            bio: "New member of the SkillSwap community.",

            online: true
        };

        members.push(customMember);

        localStorage.setItem(
            "skillswap_member",
            JSON.stringify(customMember)
        );

        showToast(`Welcome to SkillSwap, ${name}!`);

    } else {

        showToast(`Welcome back! Signed in as ${email}.`);
    }

    closeModal("authModal");

    document.getElementById("authForm").reset();

    renderMembers();
    renderListings();
}


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function openNotifications() {

    document
        .getElementById("notificationPanel")
        .classList.add("show");
}

function closeNotifications() {

    document
        .getElementById("notificationPanel")
        .classList.remove("show");
}


/* =========================================================
   MODALS
   ========================================================= */

function closeModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.remove("show");
    }
}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;

function showToast(message) {

    const toast = document.getElementById("toast");

    document.getElementById("toastMessage").textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


/* =========================================================
   SKILL BUTTON
   ========================================================= */

function viewSkill(skill) {

    showPage("explore");

    setTimeout(() => {

        const search = document.getElementById("skillSearch");

        if (search) {

            search.value = skill;

            filterSkills();
        }

    }, 200);
}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function saveRequests() {

    localStorage.setItem(
        "skillswap_requests",
        JSON.stringify(requests)
    );
}


function loadRequests() {

    const stored = localStorage.getItem("skillswap_requests");

    if (stored) {

        try {
            requests = JSON.parse(stored);
        } catch {
            console.log("Could not load requests.");
        }
    }
}


/* =========================================================
   UTILITIES
   ========================================================= */

function getInitials(name) {

    return name
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0,2)
        .toUpperCase();
}


function escapeQuotes(text) {

    return String(text)
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"');
}


/* =========================================================
   INITIALIZE
   ========================================================= */

loadRequests();

updateRequestCount();


/* =========================================================
   CLOSE MODALS WITH ESC
   ========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        document.querySelectorAll(".modal").forEach(modal => {
            modal.classList.remove("show");
        });

        closeNotifications();
    }
});


/* =========================================================
   CLOSE NOTIFICATION WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", event => {

    const panel = document.getElementById("notificationPanel");

    const button = document.querySelector(".notification-btn");

    if (
        panel &&
        panel.classList.contains("show") &&
        !panel.contains(event.target) &&
        !button.contains(event.target)
    ) {
        closeNotifications();
    }
});
```
