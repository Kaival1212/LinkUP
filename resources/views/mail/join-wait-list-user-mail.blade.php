@component('mail::message')
<x-mail::panel>
![LinkUP Logo]
</x-mail::panel>

# 🎉 Welcome to the LinkUP Waitlist! 🎉

Hi {{ $waitListUser->email }},

Thank you for joining the waitlist for **LinkUP**! 🚀
We're excited to bring you a brand-new social media experience that will revolutionize the way you connect with others.

We'll notify you as soon as a spot opens up for our beta program, so stay tuned! 📩

## Got Questions or Feedback? 💬

Feel free to reply to this email with any questions or feedback you might have. We're always looking for ways to improve and your suggestions mean a lot to us! 😊

## Join Our Team! 🙌

If you want to be part of the LinkUP journey, send us your CV and we'll be in touch! 💼

Thanks, and we can't wait to have you on board! 💙



Thanks,<br>
{{ config('app.name') }} Team
@endcomponent
