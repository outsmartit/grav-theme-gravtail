---
title: Subscribe
action: /home
form:
    name: contact
    classes: 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
    fields:
        -
            name: name
            label: Name
            classes: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:green-shadow-outline'
            placeholder: Name
            autofocus: 'off'
            autocomplete: 'on'
            type: text
            outerclasses: my-4
            position: left
            validate:
                required: true
        -
            name: email
            label: Email
            classes: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:green-shadow-outline'
            placeholder: 'Our email address'
            type: email
            outerclasses: my-4
            position: left
            validate:
                required: true
        -
            name: message
            label: Message
            placeholder: 'Your message'
            type: textarea
            outerclasses: my-4
            classes: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:green-shadow-outline'
            position: right
            validate:
                required: true
    buttons:
        -
            type: submit
            classes: 'gradient hover:bg-green-700 text-white font-bold py-4 px-4 rounded'
            value: Send
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to: '{{ config.plugins.email.to }}'
                subject: 'Website form : message from {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            message: 'Thank you for getting in touch!'
        -
            display: /thankyou
---

# Subscribe !
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.