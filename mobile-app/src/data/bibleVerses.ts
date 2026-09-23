// HYMNORA Bible Verses Database
// Popular verses in English, Hindi, and Assamese
// Production note: Full Bible text would be loaded from API/Database

export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  reference: {
    en: string;
    hi: string;
    as: string;
  };
  text: {
    en: string;
    hi: string;
    as: string;
  };
  category?: string[];
}

// Sample verses - Production will have full 31,102 verses
export const POPULAR_VERSES: BibleVerse[] = [
  {
    book: 'JHN',
    chapter: 3,
    verse: 16,
    reference: {
      en: 'John 3:16',
      hi: 'यूहन्ना 3:16',
      as: 'যোহন 3:16',
    },
    text: {
      en: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
      hi: 'क्योंकि परमेश्वर ने जगत से ऐसा प्रेम रखा कि उसने अपना एकलौता पुत्र दे दिया, ताकि जो कोई उस पर विश्वास करे वह नाश न हो, परन्तु अनन्त जीवन पाए।',
      as: 'কিয়নো ঈশ্বৰে জগতক ইমান প্ৰেম কৰিলে যে, তেওঁ নিজৰ একমাত্ৰ পুত্ৰক দান কৰিলে, যাতে যি কোনোৱে তেওঁত বিশ্বাস কৰে, তেওঁ বিনষ্ট নহয়, কিন্তু অনন্ত জীৱন পায়।',
    },
    category: ['salvation', 'love', 'faith'],
  },
  {
    book: 'PSA',
    chapter: 23,
    verse: 1,
    reference: {
      en: 'Psalm 23:1',
      hi: 'भजन संहिता 23:1',
      as: 'গীতমালা 23:1',
    },
    text: {
      en: 'The LORD is my shepherd, I lack nothing.',
      hi: 'यहोवा मेरा चरवाहा है; मुझे किसी वस्तु की घटी न होगी।',
      as: 'যিহোৱা মোৰ ৰখীয়া; মোৰ কোনো অভাৱ নহ\'ব।',
    },
    category: ['comfort', 'trust', 'protection'],
  },
  {
    book: 'PRO',
    chapter: 3,
    verse: 5,
    reference: {
      en: 'Proverbs 3:5-6',
      hi: 'नीतिवचन 3:5-6',
      as: 'নীতিবচন 3:5-6',
    },
    text: {
      en: 'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
      hi: 'तू अपने सम्पूर्ण मन से यहोवा पर भरोसा रख, और अपनी समझ का सहारा न ले। अपने सब कामों में उसको स्मरण कर, तब वह तेरे लिये सीधा मार्ग निकालेगा।',
      as: 'তুমি সম্পূৰ্ণ হৃদয়েৰে যিহোৱাত বিশ্বাস ৰাখা, আৰু নিজৰ বুজনত নিৰ্ভৰ নকৰিবা; তোমাৰ সকলো পথত তেওঁক স্বীকাৰ কৰা, তেতিয়া তেওঁ তোমাৰ পথ পোন কৰিব।',
    },
    category: ['trust', 'wisdom', 'guidance'],
  },
  {
    book: 'PHP',
    chapter: 4,
    verse: 13,
    reference: {
      en: 'Philippians 4:13',
      hi: 'फिलिप्पियों 4:13',
      as: 'ফিলিপ্পীয়া 4:13',
    },
    text: {
      en: 'I can do all this through him who gives me strength.',
      hi: 'मैं उस के द्वारा जो मुझे सामर्थ देता है सब कुछ कर सकता हूं।',
      as: 'যি জনে মোক শক্তি দিয়ে, তেওঁৰ যোগেদি মই সকলো কৰিব পাৰোঁ।',
    },
    category: ['strength', 'courage', 'faith'],
  },
  {
    book: 'JER',
    chapter: 29,
    verse: 11,
    reference: {
      en: 'Jeremiah 29:11',
      hi: 'यिर्मयाह 29:11',
      as: 'যিৰিমিয়া 29:11',
    },
    text: {
      en: 'For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future.',
      hi: 'क्योंकि यहोवा की यह वाणी है, कि मैं तुम्हारे विषय जो कल्पनाएं करता हूं उन्हें मैं जानता हूं, वे हानि की नहीं परन्तु कुशल ही की हैं, और अन्त में तुम्हारी आशा पूरी करूंगा।',
      as: 'কিয়নো মই তোমালোকৰ বিষয়ে যি পৰিকল্পনা কৰিছোঁ, সেয়া মই জানো," এয়ে যিহোৱাৰ ঘোষণা, "সমৃদ্ধিৰ পৰিকল্পনা, অনিষ্টৰ নহয়, তোমালোকক ভৱিষ্যত আৰু আশা দিবলৈ পৰিকল্পনা।',
    },
    category: ['hope', 'future', 'promise'],
  },
  {
    book: 'ROM',
    chapter: 8,
    verse: 28,
    reference: {
      en: 'Romans 8:28',
      hi: 'रोमियों 8:28',
      as: 'ৰোমীয়া 8:28',
    },
    text: {
      en: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
      hi: 'और हम जानते हैं कि जो लोग परमेश्वर से प्रेम रखते हैं, उनके लिये सब बातें मिलकर भलाई ही को उत्पन्न करती हैं; अर्थात् उन्हीं के लिये जो उसकी इच्छा के अनुसार बुलाए हुए हैं।',
      as: 'আৰু আমি জানো যে যি সকলে ঈশ্বৰক প্ৰেম কৰে, যি সকলক তেওঁৰ অভিপ্ৰায় অনুসাৰে আমন্ত্ৰণ কৰা হৈছে, তেওঁলোকৰ মঙ্গলৰ বাবে সকলো বস্তু একেলগে কাম কৰে।',
    },
    category: ['faith', 'trust', 'providence'],
  },
  {
    book: 'MAT',
    chapter: 28,
    verse: 20,
    reference: {
      en: 'Matthew 28:20',
      hi: 'मत्ती 28:20',
      as: 'মথি 28:20',
    },
    text: {
      en: 'And surely I am with you always, to the very end of the age.',
      hi: 'और देखो, मैं जगत के अन्त तक सदा तुम्हारे संग हूं।',
      as: 'আৰু চোৱা, মই যুগৰ শেষলৈকে সদায় তোমালোকৰ সৈতে আছোঁ।',
    },
    category: ['presence', 'comfort', 'promise'],
  },
  {
    book: 'ISA',
    chapter: 41,
    verse: 10,
    reference: {
      en: 'Isaiah 41:10',
      hi: 'यशायाह 41:10',
      as: 'যিচয়া 41:10',
    },
    text: {
      en: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.',
      hi: 'मत डर, क्योंकि मैं तेरे संग हूं; इधर उधर मत ताक, क्योंकि मैं तेरा परमेश्वर हूं; मैं तुझे दृढ़ करूंगा और तेरी सहायता करूंगा, अपने धर्ममय दाहिने हाथ से मैं तुझे सम्भाले रहूंगा।',
      as: 'ভয় নকৰিবা, কিয়নো মই তোমাৰ সৈতে আছোঁ; চিন্তিত নহ\'বা, কিয়নো মই তোমাৰ ঈশ্বৰ। মই তোমাক শক্তিশালী কৰিম আৰু তোমাক সহায় কৰিম; মই মোৰ ধাৰ্মিক সোঁহাতেৰে তোমাক ধৰি ৰাখিম।',
    },
    category: ['courage', 'strength', 'protection'],
  },
  {
    book: 'PSA',
    chapter: 46,
    verse: 1,
    reference: {
      en: 'Psalm 46:1',
      hi: 'भजन संहिता 46:1',
      as: 'গীতমালা 46:1',
    },
    text: {
      en: 'God is our refuge and strength, an ever-present help in trouble.',
      hi: 'परमेश्वर हमारा शरणस्थान और बल है, संकट में अति सहज से मिलनेवाला सहायक।',
      as: 'ঈশ্বৰ আমাৰ আশ্ৰয় আৰু শক্তি, সংকটত সহজে পোৱা সহায়ক।',
    },
    category: ['strength', 'refuge', 'help'],
  },
  {
    book: 'JHN',
    chapter: 14,
    verse: 6,
    reference: {
      en: 'John 14:6',
      hi: 'यूहन्ना 14:6',
      as: 'যোহন 14:6',
    },
    text: {
      en: 'Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me."',
      hi: 'यीशु ने उससे कहा, "मार्ग और सत्य और जीवन मैं ही हूं; बिना मेरे द्वारा कोई पिता के पास नहीं पहुंच सकता।"',
      as: 'যীচুৱে ক\'লে, "মই পথ, সত্য আৰু জীৱন। মোৰ যোগেদি নহ\'লে কোনোৱে পিতৃৰ ওচৰলৈ আহিব নোৱাৰে।"',
    },
    category: ['salvation', 'truth', 'jesus'],
  },
  {
    book: 'PSA',
    chapter: 119,
    verse: 105,
    reference: {
      en: 'Psalm 119:105',
      hi: 'भजन संहिता 119:105',
      as: 'গীতমালা 119:105',
    },
    text: {
      en: 'Your word is a lamp for my feet, a light on my path.',
      hi: 'तेरा वचन मेरे पांव के लिये दीपक, और मेरे मार्ग के लिये उजियाला है।',
      as: 'তোমাৰ বাক্য মোৰ ভৰিৰ প্ৰদীপ, আৰু মোৰ পথৰ পোহৰ।',
    },
    category: ['word', 'guidance', 'light'],
  },
  {
    book: 'EPH',
    chapter: 2,
    verse: 8,
    reference: {
      en: 'Ephesians 2:8-9',
      hi: 'इफिसियों 2:8-9',
      as: 'ইফিচীয়া 2:8-9',
    },
    text: {
      en: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast.',
      hi: 'क्योंकि विश्वास के द्वारा अनुग्रह ही से तुम्हारा उद्धार हुआ है; और यह तुम्हारी ओर से नहीं, वरन् परमेश्वर का दान है। और न कर्मों के कारण, ऐसा न हो कि कोई घमण्ड करे।',
      as: 'কিয়নো অনুগ্ৰহৰ দ্বাৰাই বিশ্বাসৰ যোগেদি তোমালোক পৰিত্ৰাণ পাইছা; আৰু এয়া তোমালোকৰ পৰা নহয়, ঈশ্বৰৰ দান; কৰ্মৰ দ্বাৰা নহয়, যাতে কোনোৱে গৌৰৱ নকৰে।',
    },
    category: ['grace', 'salvation', 'faith'],
  },
  {
    book: 'MAT',
    chapter: 6,
    verse: 33,
    reference: {
      en: 'Matthew 6:33',
      hi: 'मत्ती 6:33',
      as: 'মথি 6:33',
    },
    text: {
      en: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.',
      hi: 'इसलिये पहले तुम उसके राज्य और उसके धर्म की खोज करो, तो ये सब वस्तुएं भी तुम्हें मिल जाएंगी।',
      as: 'কিন্তু প্ৰথমে তেওঁৰ ৰাজ্য আৰু তেওঁৰ ধাৰ্মিকতা বিচাৰা, তেতিয়া এই সকলো বস্তুও তোমালোকক দিয়া হ\'ব।',
    },
    category: ['priority', 'kingdom', 'provision'],
  },
  {
    book: '1CO',
    chapter: 13,
    verse: 4,
    reference: {
      en: '1 Corinthians 13:4-7',
      hi: '1 कुरिन्थियों 13:4-7',
      as: '1 কৰিন্থীয়া 13:4-7',
    },
    text: {
      en: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.',
      hi: 'प्रेम धीरजवन्त है, और कृपालु है; प्रेम डाह नहीं करता; प्रेम अपनी बड़ाई नहीं करता, और फूलता नहीं। वह अनुचित काम नहीं करता, वह अपनी भलाई नहीं चाहता, वह चिढ़ता नहीं, वह बुरा नहीं मानता।',
      as: 'প্ৰেম ধৈৰ্যশীল, প্ৰেম দয়ালু। প্ৰেমে হিংসা নকৰে; প্ৰেমে গৌৰৱ নকৰে, আৰু অহংকাৰী নহয়। প্ৰেমে অনাদৰ নকৰে, নিজৰ স্বাৰ্থ নিবিচাৰে, খং নুঠে, অপকাৰৰ হিচাপ নৰাখে।',
    },
    category: ['love', 'character', 'relationships'],
  },
  {
    book: 'JAS',
    chapter: 1,
    verse: 2,
    reference: {
      en: 'James 1:2-3',
      hi: 'याकूब 1:2-3',
      as: 'যাকোব 1:2-3',
    },
    text: {
      en: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.',
      hi: 'हे मेरे भाइयो, जब तुम नाना प्रकार की परीक्षाओं में पड़ो, तो इसको पूरे आनन्द की बात समझो, यह जानकर कि तुम्हारे विश्वास के परखे जाने से धीरज उत्पन्न होता है।',
      as: 'হে মোৰ ভাই-ভনীসকল, যেতিয়া তোমালোকে বিভিন্ন ধৰণৰ পৰীক্ষাৰ সন্মুখীন হোৱা, তেতিয়া ইয়াক সম্পূৰ্ণ আনন্দ বুলি গণ্য কৰা, কিয়নো তোমালোকে জানা যে তোমালোকৰ বিশ্বাসৰ পৰীক্ষাই ধৈৰ্য উৎপন্ন কৰে।',
    },
    category: ['trials', 'joy', 'perseverance'],
  },
  {
    book: 'ROM',
    chapter: 12,
    verse: 2,
    reference: {
      en: 'Romans 12:2',
      hi: 'रोमियों 12:2',
      as: 'ৰোমীয়া 12:2',
    },
    text: {
      en: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\'s will is—his good, pleasing and perfect will.',
      hi: 'और इस संसार के सदृश न बनो; परन्तु तुम्हारी बुद्धि के नये हो जाने से तुम्हारा चाल-चलन भी बदलता जाए, जिससे तुम परमेश्वर की भली, और भावती, और सिद्ध इच्छा अनुभव से मालूम करते रहो।',
      as: 'আৰু এই জগতৰ লগত খাপ নাখাবা; কিন্তু তোমালোকৰ মনৰ নৱীকৰণৰ দ্বাৰা পৰিৱৰ্তিত হোৱা। তেতিয়া তোমালোকে ঈশ্বৰৰ ইচ্ছা কি পৰীক্ষা কৰি অনুমোদন কৰিব পাৰিবা—তেওঁৰ মঙ্গলময়, মনোৰম আৰু সিদ্ধ ইচ্ছা।',
    },
    category: ['transformation', 'mind', 'will'],
  },
];

// Daily verse rotation system
export const getDailyVerse = (date: Date = new Date()): BibleVerse => {
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % POPULAR_VERSES.length;
  return POPULAR_VERSES[index];
};

// Search verses by category
export const getVersesByCategory = (category: string): BibleVerse[] => {
  return POPULAR_VERSES.filter(verse => verse.category?.includes(category));
};

// Get random verse
export const getRandomVerse = (): BibleVerse => {
  return POPULAR_VERSES[Math.floor(Math.random() * POPULAR_VERSES.length)];
};

// Categories for filtering
export const VERSE_CATEGORIES = [
  'salvation',
  'love',
  'faith',
  'hope',
  'trust',
  'strength',
  'courage',
  'comfort',
  'protection',
  'guidance',
  'wisdom',
  'promise',
  'grace',
  'peace',
  'joy',
  'prayer',
  'forgiveness',
];
