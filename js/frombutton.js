window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
action: "https://formspree.io/f/xyyabokb",
title: "How can we help?",
fields: [
  { 
    type: "text", 
    label: "Name:", 
    name: "name",
    required: true,
    placeholder: "Your Name"
  },
  { 
    type: "email", 
    label: "Email:", 
    name: "email",
    required: true,
    placeholder: "your@email.com"
  },
  { 
    type: "text", 
    label: "Company:", 
    name: "name",
    required: false,
    placeholder: "Your Company"
  },
  {
    type: "textarea",
    label: "Additional Comments:",
    name: "additional_comments",
    placeholder: "anything else?",
  },
  { type: "submit" }      
],
styles: {
  title: {
    backgroundColor: "#c02756"
  },
  button: {
    backgroundColor: "#c02756"
  }
}
});