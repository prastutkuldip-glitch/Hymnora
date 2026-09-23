// HYMNORA Multi-Language System
// Supports: English, Hindi (हिंदी), Assamese (অসমীয়া)

export type LanguageCode = 'en' | 'hi' | 'as';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    direction: 'ltr',
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिंदी',
    flag: '🇮🇳',
    direction: 'ltr',
  },
  {
    code: 'as',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    flag: '🇮🇳',
    direction: 'ltr',
  },
];

// Translation strings for all UI elements
export const translations = {
  // === APP CORE ===
  en: {
    appName: 'HYMNORA',
    tagline: 'Faith. Scripture. Worship.',
    
    // Navigation
    home: 'Home',
    bible: 'Bible',
    hymns: 'Hymns',
    ai: 'AI Assistant',
    books: 'Books',
    profile: 'Profile',
    
    // Common Actions
    search: 'Search',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    share: 'Share',
    download: 'Download',
    play: 'Play',
    pause: 'Pause',
    continue: 'Continue',
    skip: 'Skip',
    next: 'Next',
    previous: 'Previous',
    close: 'Close',
    ok: 'OK',
    yes: 'Yes',
    no: 'No',
    back: 'Back',
    
    // Greetings
    goodMorning: 'Good Morning',
    goodAfternoon: 'Good Afternoon',
    goodEvening: 'Good Evening',
    goodNight: 'Good Night',
    blessYourDay: 'May the Lord bless your day',
    
    // Home Screen
    continueReading: 'Continue Reading',
    verseOfTheDay: 'Verse of the Day',
    quickAccess: 'Quick Access',
    recentHymns: 'Recent Hymns',
    readBible: 'Read Bible',
    listenAudio: 'Audio Bible',
    askAI: 'Ask AI',
    browseBooks: 'Browse Books',
    myBookmarks: 'My Bookmarks',
    myNotes: 'My Notes',
    dailyVerse: 'Daily Verse',
    todaysReading: "Today's Reading",
    
    // Bible Screen
    holyBible: 'Holy Bible',
    translation: 'Translation',
    oldTestament: 'Old Testament',
    newTestament: 'New Testament',
    allBooks: 'All Books',
    chapters: 'Chapters',
    verses: 'Verses',
    searchVerses: 'Search verses, chapters...',
    booksOfBible: 'Books of the Bible',
    chapter: 'Chapter',
    verse: 'Verse',
    bookmark: 'Bookmark',
    highlight: 'Highlight',
    addNote: 'Add Note',
    
    // Hymns Screen
    hymnsLibrary: 'Hymns Library',
    worshipThroughSong: 'Worship through song',
    createHymn: 'Create Your Own Hymn',
    myHymns: 'My Hymns',
    featuredHymns: 'Featured Hymns',
    officialHymnal: 'Official Hymnal',
    publicHymns: 'Public Hymns',
    searchHymns: 'Search by name, number, lyrics...',
    hymnNumber: 'Hymn #',
    lyrics: 'Lyrics',
    author: 'Author',
    categories: 'Categories',
    
    // AI Assistant Screen
    askBibleAI: 'Ask Bible AI',
    biblicalAnswers: 'Biblical answers to your questions',
    typeYourQuestion: 'Type your question...',
    askQuestion: 'Ask Question',
    voiceInput: 'Voice Input',
    recentQuestions: 'Recent Questions',
    suggestedQuestions: 'Suggested Questions',
    
    // Books Screen
    christianBooks: 'Christian Books',
    spiritualGrowth: 'Spiritual growth library',
    myLibrary: 'My Library',
    recommended: 'Recommended',
    newReleases: 'New Releases',
    classics: 'Classics',
    readNow: 'Read Now',
    addToLibrary: 'Add to Library',
    
    // Profile Screen
    myProfile: 'My Profile',
    freePlan: 'FREE PLAN',
    premiumPlan: 'PREMIUM PLAN',
    familyPlan: 'FAMILY PLAN',
    upgradeToPremium: 'Upgrade to Premium',
    unlockFeatures: 'Unlock Bible Audio, AI Assistant, Christian Books, and more premium features.',
    startFreeTrial: 'Start 7-Day Free Trial',
    yourActivity: 'Your Activity',
    daysStreak: 'Days Streak',
    versesRead: 'Verses Read',
    bookmarks: 'Bookmarks',
    favorites: 'Favorites',
    settings: 'Settings',
    appSettings: 'App Settings',
    notifications: 'Notifications',
    downloadContent: 'Download Content',
    helpSupport: 'Help & Support',
    aboutApp: 'About HYMNORA',
    logout: 'Logout',
    
    // Premium Features
    premiumFeatures: 'Premium Features',
    audioBible: 'Audio Bible',
    aiAssistant: 'AI Assistant',
    booksLibrary: 'Books Library',
    unlimitedAccess: 'Unlimited Access',
    offlineMode: 'Offline Mode',
    adFree: 'Ad-Free Experience',
    
    // Subscription Plans
    monthly: 'Monthly',
    yearly: 'Yearly',
    family: 'Family',
    perMonth: '/ month',
    perYear: '/ year',
    save17: 'Save 17%',
    upTo6Members: 'Up to 6 members',
    
    // Settings
    language: 'Language',
    selectLanguage: 'Select Language',
    fontSize: 'Font Size',
    theme: 'Theme',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    autoMode: 'Auto',
    
    // Notifications
    dailyVerseNotification: 'Daily Verse Notification',
    readingReminders: 'Reading Reminders',
    newHymnsAlert: 'New Hymns Alert',
    
    // Error Messages
    errorOccurred: 'An error occurred',
    tryAgain: 'Please try again',
    noInternet: 'No internet connection',
    loadingFailed: 'Failed to load',
    
    // Success Messages
    savedSuccessfully: 'Saved successfully',
    deletedSuccessfully: 'Deleted successfully',
    sharedSuccessfully: 'Shared successfully',
  },
  
  // === HINDI (हिंदी) ===
  hi: {
    appName: 'HYMNORA',
    tagline: 'विश्वास। पवित्रशास्त्र। आराधना।',
    
    // Navigation
    home: 'होम',
    bible: 'बाइबल',
    hymns: 'भजन',
    ai: 'AI सहायक',
    books: 'किताबें',
    profile: 'प्रोफ़ाइल',
    
    // Common Actions
    search: 'खोजें',
    save: 'सहेजें',
    cancel: 'रद्द करें',
    delete: 'हटाएं',
    edit: 'संपादित करें',
    share: 'साझा करें',
    download: 'डाउनलोड करें',
    play: 'चलाएं',
    pause: 'रोकें',
    continue: 'जारी रखें',
    skip: 'छोड़ें',
    next: 'अगला',
    previous: 'पिछला',
    close: 'बंद करें',
    ok: 'ठीक है',
    yes: 'हां',
    no: 'नहीं',
    back: 'वापस',
    
    // Greetings
    goodMorning: 'सुप्रभात',
    goodAfternoon: 'शुभ दोपहर',
    goodEvening: 'शुभ संध्या',
    goodNight: 'शुभ रात्रि',
    blessYourDay: 'प्रभु आपके दिन को आशीर्वाद दें',
    
    // Home Screen
    continueReading: 'पढ़ना जारी रखें',
    verseOfTheDay: 'आज का वचन',
    quickAccess: 'त्वरित पहुंच',
    recentHymns: 'हालिया भजन',
    readBible: 'बाइबल पढ़ें',
    listenAudio: 'ऑडियो बाइबल',
    askAI: 'AI से पूछें',
    browseBooks: 'किताबें देखें',
    myBookmarks: 'मेरे बुकमार्क',
    myNotes: 'मेरे नोट्स',
    dailyVerse: 'दैनिक वचन',
    todaysReading: 'आज का पाठ',
    
    // Bible Screen
    holyBible: 'पवित्र बाइबल',
    translation: 'अनुवाद',
    oldTestament: 'पुराना नियम',
    newTestament: 'नया नियम',
    allBooks: 'सभी पुस्तकें',
    chapters: 'अध्याय',
    verses: 'वचन',
    searchVerses: 'वचन, अध्याय खोजें...',
    booksOfBible: 'बाइबल की पुस्तकें',
    chapter: 'अध्याय',
    verse: 'वचन',
    bookmark: 'बुकमार्क',
    highlight: 'हाइलाइट',
    addNote: 'नोट जोड़ें',
    
    // Hymns Screen
    hymnsLibrary: 'भजन संग्रह',
    worshipThroughSong: 'गीत के माध्यम से आराधना',
    createHymn: 'अपना भजन बनाएं',
    myHymns: 'मेरे भजन',
    featuredHymns: 'विशेष भजन',
    officialHymnal: 'आधिकारिक भजन संग्रह',
    publicHymns: 'सार्वजनिक भजन',
    searchHymns: 'नाम, संख्या, गीत से खोजें...',
    hymnNumber: 'भजन #',
    lyrics: 'गीत',
    author: 'लेखक',
    categories: 'श्रेणियां',
    
    // AI Assistant Screen
    askBibleAI: 'बाइबल AI से पूछें',
    biblicalAnswers: 'आपके प्रश्नों के बाइबिल आधारित उत्तर',
    typeYourQuestion: 'अपना प्रश्न लिखें...',
    askQuestion: 'प्रश्न पूछें',
    voiceInput: 'वॉयस इनपुट',
    recentQuestions: 'हाल के प्रश्न',
    suggestedQuestions: 'सुझाए गए प्रश्न',
    
    // Books Screen
    christianBooks: 'ईसाई किताबें',
    spiritualGrowth: 'आध्यात्मिक विकास पुस्तकालय',
    myLibrary: 'मेरी लाइब्रेरी',
    recommended: 'अनुशंसित',
    newReleases: 'नई रिलीज़',
    classics: 'क्लासिक्स',
    readNow: 'अभी पढ़ें',
    addToLibrary: 'लाइब्रेरी में जोड़ें',
    
    // Profile Screen
    myProfile: 'मेरी प्रोफ़ाइल',
    freePlan: 'फ्री प्लान',
    premiumPlan: 'प्रीमियम प्लान',
    familyPlan: 'फैमिली प्लान',
    upgradeToPremium: 'प्रीमियम में अपग्रेड करें',
    unlockFeatures: 'ऑडियो बाइबल, AI सहायक, ईसाई किताबें और अधिक प्रीमियम सुविधाएं अनलॉक करें।',
    startFreeTrial: '7-दिन का फ्री ट्रायल शुरू करें',
    yourActivity: 'आपकी गतिविधि',
    daysStreak: 'दिनों की लकीर',
    versesRead: 'पढ़े गए वचन',
    bookmarks: 'बुकमार्क',
    favorites: 'पसंदीदा',
    settings: 'सेटिंग्स',
    appSettings: 'ऐप सेटिंग्स',
    notifications: 'सूचनाएं',
    downloadContent: 'सामग्री डाउनलोड करें',
    helpSupport: 'मदद और समर्थन',
    aboutApp: 'HYMNORA के बारे में',
    logout: 'लॉगआउट',
    
    // Premium Features
    premiumFeatures: 'प्रीमियम सुविधाएं',
    audioBible: 'ऑडियो बाइबल',
    aiAssistant: 'AI सहायक',
    booksLibrary: 'किताबों का संग्रह',
    unlimitedAccess: 'असीमित पहुंच',
    offlineMode: 'ऑफलाइन मोड',
    adFree: 'विज्ञापन-मुक्त अनुभव',
    
    // Subscription Plans
    monthly: 'मासिक',
    yearly: 'वार्षिक',
    family: 'फैमिली',
    perMonth: '/ महीना',
    perYear: '/ वर्ष',
    save17: '17% बचाएं',
    upTo6Members: '6 सदस्यों तक',
    
    // Settings
    language: 'भाषा',
    selectLanguage: 'भाषा चुनें',
    fontSize: 'फ़ॉन्ट आकार',
    theme: 'थीम',
    lightMode: 'लाइट मोड',
    darkMode: 'डार्क मोड',
    autoMode: 'ऑटो',
    
    // Notifications
    dailyVerseNotification: 'दैनिक वचन सूचना',
    readingReminders: 'पढ़ने की याद दिलाना',
    newHymnsAlert: 'नए भजन अलर्ट',
    
    // Error Messages
    errorOccurred: 'एक त्रुटि हुई',
    tryAgain: 'कृपया पुनः प्रयास करें',
    noInternet: 'इंटरनेट कनेक्शन नहीं है',
    loadingFailed: 'लोड करने में विफल',
    
    // Success Messages
    savedSuccessfully: 'सफलतापूर्वक सहेजा गया',
    deletedSuccessfully: 'सफलतापूर्वक हटाया गया',
    sharedSuccessfully: 'सफलतापूर्वक साझा किया गया',
  },
  
  // === ASSAMESE (অসমীয়া) ===
  as: {
    appName: 'HYMNORA',
    tagline: 'বিশ্বাস। শাস্ত্ৰ। উপাসনা।',
    
    // Navigation
    home: 'হ'ম',
    bible: 'বাইবেল',
    hymns: 'স্তুতি',
    ai: 'AI সহায়ক',
    books: 'কিতাপ',
    profile: 'প্ৰ'ফাইল',
    
    // Common Actions
    search: 'সন্ধান কৰক',
    save: 'সংৰক্ষণ কৰক',
    cancel: 'বাতিল কৰক',
    delete: 'মচি পেলাওক',
    edit: 'সম্পাদনা কৰক',
    share: 'শ্বেয়াৰ কৰক',
    download: 'ডাউনলোড কৰক',
    play: 'বজাওক',
    pause: 'বন্ধ কৰক',
    continue: 'আগবাঢ়ক',
    skip: 'এৰি দিয়ক',
    next: 'পৰৱৰ্তী',
    previous: 'পূৰ্বৱৰ্তী',
    close: 'বন্ধ কৰক',
    ok: 'ঠিক আছে',
    yes: 'হয়',
    no: 'নহয়',
    back: 'পিছলৈ',
    
    // Greetings
    goodMorning: 'শুভ ৰাতিপুৱা',
    goodAfternoon: 'শুভ অপৰাহ্ন',
    goodEvening: 'শুভ সন্ধিয়া',
    goodNight: 'শুভ ৰাত্ৰি',
    blessYourDay: 'প্ৰভুৱে আপোনাৰ দিনটো আশীৰ্বাদ কৰক',
    
    // Home Screen
    continueReading: 'পঢ়া অব্যাহত ৰাখক',
    verseOfTheDay: 'আজিৰ পদ',
    quickAccess: 'দ্ৰুত প্ৰৱেশ',
    recentHymns: 'শেহতীয়া স্তুতি',
    readBible: 'বাইবেল পঢ়ক',
    listenAudio: 'অডিঅ' বাইবেল',
    askAI: 'AI ক সুধিব',
    browseBooks: 'কিতাপ চাওক',
    myBookmarks: 'মোৰ বুকমাৰ্ক',
    myNotes: 'মোৰ টোকা',
    dailyVerse: 'দৈনিক পদ',
    todaysReading: 'আজিৰ পাঠ',
    
    // Bible Screen
    holyBible: 'পবিত্ৰ বাইবেল',
    translation: 'অনুবাদ',
    oldTestament: 'পুৰণি নিয়ম',
    newTestament: 'নতুন নিয়ম',
    allBooks: 'সকলো কিতাপ',
    chapters: 'অধ্যায়',
    verses: 'পদ',
    searchVerses: 'পদ, অধ্যায় সন্ধান কৰক...',
    booksOfBible: 'বাইবেলৰ কিতাপ',
    chapter: 'অধ্যায়',
    verse: 'পদ',
    bookmark: 'বুকমাৰ্ক',
    highlight: 'হাইলাইট',
    addNote: 'টোকা যোগ কৰক',
    
    // Hymns Screen
    hymnsLibrary: 'স্তুতি সংগ্ৰহ',
    worshipThroughSong: 'গীতৰ জৰিয়তে উপাসনা',
    createHymn: 'নিজৰ স্তুতি সৃষ্টি কৰক',
    myHymns: 'মোৰ স্তুতি',
    featuredHymns: 'বিশেষ স্তুতি',
    officialHymnal: 'আধিকাৰিক স্তুতি সংগ্ৰহ',
    publicHymns: 'ৰাজহুৱা স্তুতি',
    searchHymns: 'নাম, সংখ্যা, গীতেৰে সন্ধান কৰক...',
    hymnNumber: 'স্তুতি #',
    lyrics: 'গীত',
    author: 'লেখক',
    categories: 'শ্ৰেণীসমূহ',
    
    // AI Assistant Screen
    askBibleAI: 'বাইবেল AI ক সুধিব',
    biblicalAnswers: 'আপোনাৰ প্ৰশ্নৰ বাইবেল ভিত্তিক উত্তৰ',
    typeYourQuestion: 'আপোনাৰ প্ৰশ্ন লিখক...',
    askQuestion: 'প্ৰশ্ন সুধিব',
    voiceInput: 'ভইচ ইনপুট',
    recentQuestions: 'শেহতীয়া প্ৰশ্ন',
    suggestedQuestions: 'পৰামৰ্শিত প্ৰশ্ন',
    
    // Books Screen
    christianBooks: 'খ্ৰীষ্টান কিতাপ',
    spiritualGrowth: 'আধ্যাত্মিক বিকাশ পুথিভঁৰাল',
    myLibrary: 'মোৰ লাইব্ৰেৰী',
    recommended: 'পৰামৰ্শিত',
    newReleases: 'নতুন মুক্তি',
    classics: 'ক্লাছিক',
    readNow: 'এতিয়াই পঢ়ক',
    addToLibrary: 'লাইব্ৰেৰীত যোগ কৰক',
    
    // Profile Screen
    myProfile: 'মোৰ প্ৰ'ফাইল',
    freePlan: 'ফ্ৰী প্লেন',
    premiumPlan: 'প্ৰিমিয়াম প্লেন',
    familyPlan: 'পৰিয়াল প্লেন',
    upgradeToPremium: 'প্ৰিমিয়ামলৈ আপগ্ৰেড কৰক',
    unlockFeatures: 'অডিঅ' বাইবেল, AI সহায়ক, খ্ৰীষ্টান কিতাপ, আৰু অধিক প্ৰিমিয়াম সুবিধা আনলক কৰক।',
    startFreeTrial: '7-দিনৰ ফ্ৰী ট্ৰাইয়েল আৰম্ভ কৰক',
    yourActivity: 'আপোনাৰ কাৰ্যকলাপ',
    daysStreak: 'দিনৰ ধাৰা',
    versesRead: 'পঢ়া পদ',
    bookmarks: 'বুকমাৰ্ক',
    favorites: 'প্ৰিয়',
    settings: 'ছেটিংছ',
    appSettings: 'এপ ছেটিংছ',
    notifications: 'জাননী',
    downloadContent: 'সমল ডাউনলোড কৰক',
    helpSupport: 'সহায় আৰু সমৰ্থন',
    aboutApp: 'HYMNORA ৰ বিষয়ে',
    logout: 'লগআউট',
    
    // Premium Features
    premiumFeatures: 'প্ৰিমিয়াম সুবিধা',
    audioBible: 'অডিঅ' বাইবেল',
    aiAssistant: 'AI সহায়ক',
    booksLibrary: 'কিতাপৰ সংগ্ৰহ',
    unlimitedAccess: 'সীমাহীন প্ৰৱেশ',
    offlineMode: 'অফলাইন মোড',
    adFree: 'বিজ্ঞাপন-মুক্ত অভিজ্ঞতা',
    
    // Subscription Plans
    monthly: 'মাহিলী',
    yearly: 'বাৰ্ষিক',
    family: 'পৰিয়াল',
    perMonth: '/ মাহ',
    perYear: '/ বছৰ',
    save17: '17% সংৰক্ষণ কৰক',
    upTo6Members: '6 সদস্যলৈকে',
    
    // Settings
    language: 'ভাষা',
    selectLanguage: 'ভাষা নিৰ্বাচন কৰক',
    fontSize: 'ফন্ট আকাৰ',
    theme: 'থিম',
    lightMode: 'লাইট মোড',
    darkMode: 'ডাৰ্ক মোড',
    autoMode: 'স্বয়ংক্ৰিয়',
    
    // Notifications
    dailyVerseNotification: 'দৈনিক পদ জাননী',
    readingReminders: 'পঢ়াৰ সোঁৱৰণী',
    newHymnsAlert: 'নতুন স্তুতি সতৰ্কতা',
    
    // Error Messages
    errorOccurred: 'এটা ত্ৰুটি হৈছে',
    tryAgain: 'অনুগ্ৰহ কৰি পুনৰ চেষ্টা কৰক',
    noInternet: 'ইণ্টাৰনেট সংযোগ নাই',
    loadingFailed: 'লোড কৰিবলৈ ব্যৰ্থ',
    
    // Success Messages
    savedSuccessfully: 'সফলভাৱে সংৰক্ষণ কৰা হৈছে',
    deletedSuccessfully: 'সফলভাৱে মচি পেলোৱা হৈছে',
    sharedSuccessfully: 'সফলভাৱে শ্বেয়াৰ কৰা হৈছে',
  },
};

// Helper function to get translation
export const getTranslation = (key: keyof typeof translations.en, lang: LanguageCode = 'en'): string => {
  return translations[lang][key] || translations.en[key];
};

// Helper function to get all translations for a key
export const getAllTranslations = (key: keyof typeof translations.en) => {
  return {
    en: translations.en[key],
    hi: translations.hi[key],
    as: translations.as[key],
  };
};
