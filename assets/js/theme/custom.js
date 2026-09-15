import $ from 'jquery';
import { parseInt } from 'lodash';
export default function customJS(context) { 
    const { hide_ask_an_expert} = context;

    //Ask An Expert popup start
    if(hide_ask_an_expert){
        $(".ask-an-expert-popup .ask-form").on('submit', event => {
            event.preventDefault();
            const page_id = $(".ask-form #page_id").val();
            // const page_subject = $(".ask-form #page_content").val();
            const contact_fullname = $(".ask-form #contact_fullname").val();
            const contact_lastname = $(".ask-form #contact_lastname").val();
            const contact_email = $(".ask-form #contact_email").val();
            const contact_phone = $(".ask-form #contact_phone").val();
            const contact_comment_area = $(".ask-form #contact_comment_area").val();
            const g_recaptcha_response = $(".ask-form #g-recaptcha-response").val();

            if(g_recaptcha_response == ""){
                alert("Please verify google recaptcha");
                return false;
            }

            if(page_id != "" && contact_fullname != "" && contact_lastname != "" && contact_email != "" && contact_phone != "" && contact_comment_area != "" && g_recaptcha_response != ""){
                const html = `\n\rFirst Name: ${contact_fullname}\n\rLast Name: ${contact_lastname}\n\rPhone: ${contact_phone}\n\rEmail: ${contact_email}\n\rMessage: ${contact_comment_area}\n\r\n\r`;
                $("#contact_question").val(html);
                $(".ask-form-body .loadingOverlay").show();
                setTimeout(() => {
                    $.ajax({
                        type: "POST",
                        url: "/pages.php?action=sendContactForm",
                        data: $('.ask-an-expert-popup .ask-form').serialize(),
                        success: function (s) {
                            $(".ask-form-body").html(`<div class="alertBox alertBox--success">Thank you. We've received your feedback and will respond shortly.</div>`)
                        }
                    });
                }, 500);
            }
        });
    }
    //Ask An Expert popup end

}
// === Accessibility Fix for "All Categories" and "User Account" Dropdowns ===
// Keeps Stencil behavior & design intact while improving keyboard navigation.

document.addEventListener('DOMContentLoaded', function() {

    /* ---------------------------
       ALL CATEGORIES MENU FIX
    ---------------------------- */
    const categoryToggle = document.querySelector('[data-target="#collapseExample"]');
    const categoryMenu = document.querySelector('#collapseExample');

    if (categoryToggle && categoryMenu) {

        // Initialize ARIA attributes
        categoryToggle.setAttribute('aria-expanded', 'false');
        categoryMenu.setAttribute('aria-hidden', 'true');

        // Control tabbing inside collapsed menu
        const setMenuTabIndex = (disabled) => {
            categoryMenu.querySelectorAll('a, button').forEach(el => {
                el.tabIndex = disabled ? -1 : 0;
            });
        };
        setMenuTabIndex(true);

        // Toggle accessibility states when user opens/closes menu
        categoryToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            categoryMenu.setAttribute('aria-hidden', String(expanded));
            setMenuTabIndex(expanded);

            // Move focus to first link when opened
            if (!expanded) {
                const firstLink = categoryMenu.querySelector('a, button');
                if (firstLink) firstLink.focus();
            }
        });

        // Also allow Enter/Space key to toggle the menu
        categoryToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }


    /* ---------------------------
       USER ACCOUNT DROPDOWN FIX
    ---------------------------- */
    const userToggle = document.querySelector('[data-dropdown="account-dropdown"]');
    const userMenu = document.getElementById('account-dropdown');

    if (userToggle && userMenu) {

        // Ensure ARIA setup
        userToggle.setAttribute('aria-expanded', 'false');
        userMenu.setAttribute('aria-hidden', 'true');

        // Disable tabbing when collapsed
        const setUserMenuTabIndex = (disabled) => {
            userMenu.querySelectorAll('a, button').forEach(el => {
                el.tabIndex = disabled ? -1 : 0;
            });
        };
        setUserMenuTabIndex(true);

        // Handle click toggle
        userToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            userMenu.setAttribute('aria-hidden', String(expanded));
            setUserMenuTabIndex(expanded);

            // When opening, move focus into the first link
            if (!expanded) {
                setTimeout(() => {
                    const firstLink = userMenu.querySelector('a, button');
                    if (firstLink) firstLink.focus();
                }, 100);
            }
        });

        // Handle Enter/Space key to toggle open/close
        userToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });

        // When dropdown closes (e.g., user clicks elsewhere), disable tabbing again
        document.addEventListener('click', function(e) {
            const inside = userMenu.contains(e.target) || userToggle.contains(e.target);
            if (!inside && userMenu.getAttribute('aria-hidden') === 'false') {
                userMenu.setAttribute('aria-hidden', 'true');
                userToggle.setAttribute('aria-expanded', 'false');
                setUserMenuTabIndex(true);
            }
        });
    }

});
