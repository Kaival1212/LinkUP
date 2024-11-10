@component('mail::message')
# LinkUP

# 🎉 Welcome to the LinkUP Waitlist! 🎉

Hi {{ $waitListUser->email }},

Thank you for joining the waitlist for **LinkUP**! 🚀

We're excited to bring you a brand-new social media experience that will revolutionize the way you connect with others.

We'll notify you as soon as a spot opens up for our beta program, so stay tuned! 📩

@component('mail::panel')
### Got Questions or Feedback? 💬

Feel free to reply to this email with any questions or feedback you might have. We're always looking for ways to improve and your suggestions mean a lot to us! 😊
@endcomponent

@component('mail::panel')
### Join Our Team! 🙌

If you want to be part of the LinkUP journey, send us your CV and we'll be in touch! 💼
@endcomponent

Thanks, and we can't wait to have you on board! 💙

Best regards,<br>
{{ config('app.name') }} Team
@endcomponent
