@component('mail::message')
# New Connection Request! 🎉

Hi {{ $receiver->name }},

**{{ $sender->name }}** wants to connect with you on **LinkUP**! 🎊
Expand your network and meet new people today.

@component('mail::button', ['url' => url('/connections/accept/' . $sender->id)])
Accept Request ✅
@endcomponent
@component('mail::button', ['url' => url('/connections/decline/' . $sender->id), 'color' => 'red'])
Decline Request ❌
@endcomponent

@component('mail::panel')
Got questions? Reply to this email, and we’ll be happy to assist! 😊
@endcomponent

Thanks for being part of the **LinkUP** community! 💙

Best regards,
The **LinkUP** Team
@endcomponent
