// --------------------------------------------------------
// INITIALIZATION
// This part starts up the icon library so we can see them.
// --------------------------------------------------------
lucide.createIcons();


// --------------------------------------------------------
// 1. SCROLL ANIMATIONS (The "Reveal" Effect)
// This code watches elements with the class 'reveal'.
// When you scroll down and they appear on screen, we add 'active' to them.
// The CSS handles the actual movement/fading in.
// --------------------------------------------------------
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // If the element is visible on the screen...
    if (entry.isIntersecting) {
      // Add the class that triggers the animation
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 }); // 0.15 means trigger when 15% of the item is visible

// Start watching every element
revealElements.forEach(el => revealObserver.observe(el));


// --------------------------------------------------------
// 2. MOBILE MENU LOGIC
// Handles opening and closing the side menu on small screens.
// --------------------------------------------------------
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
  // Check if the menu is hidden (pushed to the right)
  const isClosed = mobileMenu.classList.contains('translate-x-full');
  
  if (isClosed) {
    // Bring it onto the screen
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
  } else {
    // Push it off the screen
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
  }
}

// Add click listeners to buttons
menuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Close the menu automatically when a user clicks a link
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      mobileMenu.classList.remove('translate-x-0');
  });
});


// --------------------------------------------------------
// 3. NAVBAR SCROLL EFFECT
// Makes the navbar darker when you scroll down so text stays readable.
// --------------------------------------------------------
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    // If we've scrolled more than 50 pixels down...
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


// --------------------------------------------------------
// 4. BOOKING PAGE LOGIC
// Handles selecting rooms, date validation, and submitting the form.
// --------------------------------------------------------
const roomCards = document.querySelectorAll('.room-card');
const roomSelect = document.getElementById('room-select');
const bookingForm = document.getElementById('booking-form');
const formContainer = document.getElementById('booking-form-container');
const successMsg = document.getElementById('booking-success');
const submitBtn = document.getElementById('submit-btn');
const bookingRefSpan = document.getElementById('booking-ref');
const resetBtn = document.getElementById('reset-booking');
const checkInInput = document.getElementById('checkIn');
const checkOutInput = document.getElementById('checkOut');

// --- Date Validation ---
// Prevents picking dates in the past.
if(checkInInput && checkOutInput) {
    const today = new Date().toISOString().split('T')[0]; // Gets today's date in YYYY-MM-DD format
    checkInInput.setAttribute('min', today);
    checkOutInput.setAttribute('min', today);

    // When Check-in changes, ensure Check-out is after it
    checkInInput.addEventListener('change', () => {
        checkOutInput.setAttribute('min', checkInInput.value);
        
        // If checkout is now invalid (before checkin), reset it
        if(checkOutInput.value && checkOutInput.value < checkInInput.value) {
            checkOutInput.value = checkInInput.value;
        }
    });
}

// --- Selecting a Room ---
// When user clicks a card in "Sleep" section, scroll to booking and pre-fill the form.
roomCards.forEach(card => {
  card.addEventListener('click', () => {
    const roomId = card.getAttribute('data-room-id');
    
    // Smooth scroll to the booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Select the correct option in the dropdown
    if(roomSelect) roomSelect.value = roomId;
  });
});

// --- Submitting the Form ---
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the page from reloading
    
    // 1. Show Loading State
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerHTML = `Processing...`;
    submitBtn.disabled = true;

    // 2. Simulate API Call (Fake delay)
    setTimeout(() => {
      // 3. Generate a fake Booking Reference ID
      const randomRef = Math.random().toString(36).substring(2, 9).toUpperCase();
      bookingRefSpan.innerText = randomRef;
      
      // 4. Swap Form with Success Message
      formContainer.classList.add('hidden');
      successMsg.classList.remove('hidden');
      
      // 5. Reset button state for next time
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;
      bookingForm.reset();
    }, 1500); // Wait 1.5 seconds
  });
}

// --- Reset Booking ---
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    successMsg.classList.add('hidden');
    formContainer.classList.remove('hidden');
  });
}


// --------------------------------------------------------
// 5. AMENITIES SLIDER (Smooth Crossfade)
// Handles switching the background image when clicking amenity buttons.
// --------------------------------------------------------
const amenityBtns = document.querySelectorAll('.amenity-btn');
const amenityBgFront = document.getElementById('amenity-bg-front');
const amenityBgBack = document.getElementById('amenity-bg-back');
const amenityTitle = document.getElementById('amenity-title');

let isAnimating = false;

amenityBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if(isAnimating) return; // Wait until animation finishes
    isAnimating = true;

    // 1. Reset all buttons to inactive style
    amenityBtns.forEach(b => {
      b.classList.remove('border-resort-gold', 'bg-white/20', 'scale-110', 'shadow-[0_0_30px_rgba(251,191,36,0.6)]');
      b.classList.add('border-white/30', 'bg-black/20', 'hover:bg-white/10');
      
      const icon = b.querySelector('svg') || b.querySelector('i');
      if(icon) {
        icon.classList.remove('scale-150', 'text-resort-gold');
        icon.classList.add('scale-100', 'text-white');
      }
    });

    // 2. Highlight the clicked button
    btn.classList.remove('border-white/30', 'bg-black/20', 'hover:bg-white/10');
    btn.classList.add('border-resort-gold', 'bg-white/20', 'scale-110', 'shadow-[0_0_30px_rgba(251,191,36,0.6)]');
    
    const activeIcon = btn.querySelector('svg') || btn.querySelector('i');
    if(activeIcon) {
        activeIcon.classList.remove('scale-100', 'text-white');
        activeIcon.classList.add('scale-150', 'text-resort-gold');
    }

    // 3. Perform the Background Crossfade
    const newImg = btn.getAttribute('data-img');
    const newTitle = btn.getAttribute('data-title');

    // Set the back layer to the new image immediately
    if(amenityBgBack) amenityBgBack.style.backgroundImage = `url('${newImg}')`;
    
    // Fade out the front layer (revealing the back layer)
    if(amenityBgFront) amenityBgFront.style.opacity = '0';
    
    // Fade out title
    if(amenityTitle) amenityTitle.style.opacity = '0';

    // Wait for fade to finish (1s)
    setTimeout(() => {
        // Now set the front layer to the new image and make it visible again
        if(amenityBgFront) {
            amenityBgFront.style.backgroundImage = `url('${newImg}')`;
            amenityBgFront.style.opacity = '1';
        }
        
        // Update and show title
        if(amenityTitle) {
          amenityTitle.innerText = newTitle;
          amenityTitle.style.opacity = '1';
        }
        
        isAnimating = false;
    }, 1000); 
  });
});


// --------------------------------------------------------
// 6. GALLERY & LIGHTBOX
// Handles "View All" and clicking images to see them full screen.
// --------------------------------------------------------
const viewAllBtn = document.getElementById('gallery-view-all');
const hiddenGalleryItems = document.querySelectorAll('.gallery-hidden');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// Show hidden images
if (viewAllBtn) {
  viewAllBtn.addEventListener('click', () => {
    hiddenGalleryItems.forEach(item => {
      item.classList.remove('hidden');
      item.classList.add('active'); // triggers animation
    });
    viewAllBtn.style.display = 'none';
  });
}

// Open Lightbox logic (Delegation: Listen to clicks on document)
document.addEventListener('click', (e) => {
    // Did we click inside a gallery item?
    const target = e.target.closest('.gallery-item');
    
    if (target) {
        const img = target.querySelector('img');
        if (img && lightbox && lightboxImg) {
            // Set lightbox image source
            lightboxImg.src = img.src;
            
            // Show lightbox
            lightbox.classList.remove('hidden');
            // Small delay to allow CSS transition
            setTimeout(() => {
                lightbox.classList.remove('opacity-0');
                lightboxImg.classList.remove('scale-95');
                lightboxImg.classList.add('scale-100');
            }, 10);
            
            // Prevent scrolling body behind lightbox
            document.body.style.overflow = 'hidden'; 
        }
    }
});

function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    
    // Fade out
    lightbox.classList.add('opacity-0');
    lightboxImg.classList.remove('scale-100');
    lightboxImg.classList.add('scale-95');
    
    // Wait for animation then hide
    setTimeout(() => {
        lightbox.classList.add('hidden');
        lightboxImg.src = '';
        document.body.style.overflow = '';
    }, 300);
}

// Close buttons
if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        // Close if clicking the black background, not the image
        if (e.target === lightbox) closeLightbox();
    });
}
// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});


// --------------------------------------------------------
// 7. SEARCH OVERLAY LOGIC
// --------------------------------------------------------
const searchTrigger = document.getElementById('search-trigger');
const searchOverlay = document.getElementById('search-overlay');
const closeSearchBtn = document.getElementById('close-search-btn');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchLinks = document.querySelectorAll('.search-link');

function toggleSearch() {
    if (searchOverlay.classList.contains('hidden')) {
        // Open
        searchOverlay.classList.remove('hidden');
        setTimeout(() => {
            searchOverlay.classList.remove('opacity-0');
            searchInput.focus();
        }, 10);
        document.body.style.overflow = 'hidden';
    } else {
        // Close
        searchOverlay.classList.add('opacity-0');
        setTimeout(() => {
            searchOverlay.classList.add('hidden');
        }, 300);
        document.body.style.overflow = '';
    }
}

searchTrigger.addEventListener('click', toggleSearch);
closeSearchBtn.addEventListener('click', toggleSearch);

// Dummy Search Result Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    
    if (term.length > 2) {
        searchResults.classList.remove('opacity-0');
        // Inject HTML for results
        searchResults.innerHTML = `
            <div class="col-span-full text-white/50 text-sm uppercase font-bold tracking-widest mb-2">Results for "${term}"</div>
            <a href="#rooms" onclick="toggleSearch()" class="p-6 bg-white/5 rounded-3xl hover:bg-white/10 transition-colors border border-white/10 group">
                <h4 class="text-xl font-display font-bold text-white group-hover:text-resort-gold mb-1">Luxury Accommodation</h4>
                <p class="text-white/60 text-sm">Find your perfect stay.</p>
            </a>
            <a href="#amenities" onclick="toggleSearch()" class="p-6 bg-white/5 rounded-3xl hover:bg-white/10 transition-colors border border-white/10 group">
                <h4 class="text-xl font-display font-bold text-white group-hover:text-resort-gold mb-1">Resort Activities</h4>
                <p class="text-white/60 text-sm">Jet skiing, dining, and more.</p>
            </a>
        `;
    } else {
        searchResults.classList.add('opacity-0');
        setTimeout(() => searchResults.innerHTML = '', 300);
    }
});

// Close search if a quick link is clicked
searchLinks.forEach(link => {
    link.addEventListener('click', toggleSearch);
});


// --------------------------------------------------------
// 8. LEGAL TEXT MODALS (Terms & Privacy)
// --------------------------------------------------------
const textModal = document.getElementById('text-modal');
const closeTextModal = document.getElementById('close-text-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const legalLinks = document.querySelectorAll('.legal-link');

const legalContent = {
    terms: `
        <p>Welcome to Ankaase Lakeside Resort. By accessing this website, you agree to be bound by these terms and conditions.</p>
        <h4 class="text-white font-bold mt-4 mb-2">1. Reservations</h4>
        <p>All reservations are subject to availability. A deposit is required to secure your booking.</p>
        <h4 class="text-white font-bold mt-4 mb-2">2. Cancellation Policy</h4>
        <p>Cancellations made 48 hours prior to check-in will receive a full refund. Late cancellations may incur a fee.</p>
        <h4 class="text-white font-bold mt-4 mb-2">3. Resort Rules</h4>
        <p>Guests must adhere to noise regulations after 10 PM. Swimming in the lake is at your own risk.</p>
    `,
    privacy: `
        <p>Your privacy is important to us. This policy outlines how we handle your personal information.</p>
        <h4 class="text-white font-bold mt-4 mb-2">1. Data Collection</h4>
        <p>We collect information you provide directly to us when booking or subscribing to our newsletter.</p>
        <h4 class="text-white font-bold mt-4 mb-2">2. Use of Data</h4>
        <p>We use your data to process bookings and improve your resort experience. We do not sell your data to third parties.</p>
    `
};

legalLinks.forEach(link => {
    link.addEventListener('click', () => {
        const type = link.getAttribute('data-type');
        modalTitle.innerText = type === 'terms' ? 'Terms of Service' : 'Privacy Policy';
        modalContent.innerHTML = legalContent[type];
        
        textModal.classList.remove('hidden');
        setTimeout(() => textModal.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden';
    });
});

closeTextModal.addEventListener('click', () => {
    textModal.classList.add('opacity-0');
    setTimeout(() => {
        textModal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
});


// --------------------------------------------------------
// 9. NEWSLETTER FORM
// --------------------------------------------------------
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = newsletterForm.querySelector('button');
        const input = newsletterForm.querySelector('input');
        
        // UI Feedback
        btn.innerText = 'Joined!';
        btn.classList.add('bg-green-500', 'text-white');
        input.value = '';
        
        // Reset button after 3 seconds
        setTimeout(() => {
            btn.innerText = 'Go';
            btn.classList.remove('bg-green-500');
        }, 3000);
    });
}