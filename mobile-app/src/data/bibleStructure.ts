// HYMNORA Bible Structure
// Complete 66 Books with Chapter and Verse counts

export interface BibleBook {
  id: number;
  code: string;
  testament: 'old' | 'new';
  chapters: number;
  totalVerses: number;
  names: {
    en: string;
    hi: string;
    as: string;
  };
  abbreviation: {
    en: string;
    hi: string;
    as: string;
  };
}

export const BIBLE_BOOKS: BibleBook[] = [
  // OLD TESTAMENT (39 Books)
  // Pentateuch (Torah) - First 5 Books
  {
    id: 1,
    code: 'GEN',
    testament: 'old',
    chapters: 50,
    totalVerses: 1533,
    names: { en: 'Genesis', hi: 'उत्पत्ति', as: 'আদিপুস্তক' },
    abbreviation: { en: 'Gen', hi: 'उत्प', as: 'আদি' },
  },
  {
    id: 2,
    code: 'EXO',
    testament: 'old',
    chapters: 40,
    totalVerses: 1213,
    names: { en: 'Exodus', hi: 'निर्गमन', as: 'যাত্ৰাপুস্তক' },
    abbreviation: { en: 'Exo', hi: 'निर्ग', as: 'যাত্ৰা' },
  },
  {
    id: 3,
    code: 'LEV',
    testament: 'old',
    chapters: 27,
    totalVerses: 859,
    names: { en: 'Leviticus', hi: 'लैव्यव्यवस्था', as: 'লেবীয়পুস্তক' },
    abbreviation: { en: 'Lev', hi: 'लैव्य', as: 'লেবীয়' },
  },
  {
    id: 4,
    code: 'NUM',
    testament: 'old',
    chapters: 36,
    totalVerses: 1288,
    names: { en: 'Numbers', hi: 'गिनती', as: 'গণনাপুস্তক' },
    abbreviation: { en: 'Num', hi: 'गिन', as: 'গণনা' },
  },
  {
    id: 5,
    code: 'DEU',
    testament: 'old',
    chapters: 34,
    totalVerses: 959,
    names: { en: 'Deuteronomy', hi: 'व्यवस्थाविवरण', as: 'দ্বিতীয় বিবরণ' },
    abbreviation: { en: 'Deu', hi: 'व्यव', as: 'দ্বিতীয়' },
  },
  
  // Historical Books
  {
    id: 6,
    code: 'JOS',
    testament: 'old',
    chapters: 24,
    totalVerses: 658,
    names: { en: 'Joshua', hi: 'यहोशू', as: 'যিহোচূৱা' },
    abbreviation: { en: 'Jos', hi: 'यहो', as: 'যিহো' },
  },
  {
    id: 7,
    code: 'JDG',
    testament: 'old',
    chapters: 21,
    totalVerses: 618,
    names: { en: 'Judges', hi: 'न्यायियों', as: 'বিচাৰকৰ্তৃসকল' },
    abbreviation: { en: 'Jdg', hi: 'न्या', as: 'বিচাৰ' },
  },
  {
    id: 8,
    code: 'RUT',
    testament: 'old',
    chapters: 4,
    totalVerses: 85,
    names: { en: 'Ruth', hi: 'रूत', as: 'ৰূথ' },
    abbreviation: { en: 'Rut', hi: 'रूत', as: 'ৰূথ' },
  },
  {
    id: 9,
    code: '1SA',
    testament: 'old',
    chapters: 31,
    totalVerses: 810,
    names: { en: '1 Samuel', hi: '1 शमूएल', as: '1 চমূৱেল' },
    abbreviation: { en: '1Sa', hi: '1शमू', as: '1চমূ' },
  },
  {
    id: 10,
    code: '2SA',
    testament: 'old',
    chapters: 24,
    totalVerses: 695,
    names: { en: '2 Samuel', hi: '2 शमूएल', as: '2 চমূৱেল' },
    abbreviation: { en: '2Sa', hi: '2शमू', as: '2চমূ' },
  },
  {
    id: 11,
    code: '1KI',
    testament: 'old',
    chapters: 22,
    totalVerses: 816,
    names: { en: '1 Kings', hi: '1 राजा', as: '1 ৰজাসকল' },
    abbreviation: { en: '1Ki', hi: '1राजा', as: '1ৰজা' },
  },
  {
    id: 12,
    code: '2KI',
    testament: 'old',
    chapters: 25,
    totalVerses: 719,
    names: { en: '2 Kings', hi: '2 राजा', as: '2 ৰজাসকল' },
    abbreviation: { en: '2Ki', hi: '2राजा', as: '2ৰজা' },
  },
  {
    id: 13,
    code: '1CH',
    testament: 'old',
    chapters: 29,
    totalVerses: 942,
    names: { en: '1 Chronicles', hi: '1 इतिहास', as: '1 বংশাৱলি' },
    abbreviation: { en: '1Ch', hi: '1इति', as: '1বংশ' },
  },
  {
    id: 14,
    code: '2CH',
    testament: 'old',
    chapters: 36,
    totalVerses: 822,
    names: { en: '2 Chronicles', hi: '2 इतिहास', as: '2 বংশাৱলি' },
    abbreviation: { en: '2Ch', hi: '2इति', as: '2বংশ' },
  },
  {
    id: 15,
    code: 'EZR',
    testament: 'old',
    chapters: 10,
    totalVerses: 280,
    names: { en: 'Ezra', hi: 'एज्रा', as: 'ইজৰা' },
    abbreviation: { en: 'Ezr', hi: 'एज्रा', as: 'ইজৰা' },
  },
  {
    id: 16,
    code: 'NEH',
    testament: 'old',
    chapters: 13,
    totalVerses: 406,
    names: { en: 'Nehemiah', hi: 'नहेम्याह', as: 'নহিমিয়া' },
    abbreviation: { en: 'Neh', hi: 'नहे', as: 'নহি' },
  },
  {
    id: 17,
    code: 'EST',
    testament: 'old',
    chapters: 10,
    totalVerses: 167,
    names: { en: 'Esther', hi: 'एस्तेर', as: 'ইষ্টেৰ' },
    abbreviation: { en: 'Est', hi: 'एस्ते', as: 'ইষ্টে' },
  },
  
  // Wisdom Books
  {
    id: 18,
    code: 'JOB',
    testament: 'old',
    chapters: 42,
    totalVerses: 1070,
    names: { en: 'Job', hi: 'अय्यूब', as: 'ইয়োব' },
    abbreviation: { en: 'Job', hi: 'अय्यू', as: 'ইয়োব' },
  },
  {
    id: 19,
    code: 'PSA',
    testament: 'old',
    chapters: 150,
    totalVerses: 2461,
    names: { en: 'Psalms', hi: 'भजन संहिता', as: 'গীতমালা' },
    abbreviation: { en: 'Psa', hi: 'भज', as: 'গীত' },
  },
  {
    id: 20,
    code: 'PRO',
    testament: 'old',
    chapters: 31,
    totalVerses: 915,
    names: { en: 'Proverbs', hi: 'नीतिवचन', as: 'নীতিবচন' },
    abbreviation: { en: 'Pro', hi: 'नीति', as: 'নীতি' },
  },
  {
    id: 21,
    code: 'ECC',
    testament: 'old',
    chapters: 12,
    totalVerses: 222,
    names: { en: 'Ecclesiastes', hi: 'सभोपदेशक', as: 'উপদেশক' },
    abbreviation: { en: 'Ecc', hi: 'सभो', as: 'উপদে' },
  },
  {
    id: 22,
    code: 'SNG',
    testament: 'old',
    chapters: 8,
    totalVerses: 117,
    names: { en: 'Song of Solomon', hi: 'श्रेष्ठगीत', as: 'পৰম গীত' },
    abbreviation: { en: 'Sng', hi: 'श्रेष्ठ', as: 'পৰম' },
  },
  
  // Major Prophets
  {
    id: 23,
    code: 'ISA',
    testament: 'old',
    chapters: 66,
    totalVerses: 1292,
    names: { en: 'Isaiah', hi: 'यशायाह', as: 'যিচয়া' },
    abbreviation: { en: 'Isa', hi: 'यश', as: 'যিচ' },
  },
  {
    id: 24,
    code: 'JER',
    testament: 'old',
    chapters: 52,
    totalVerses: 1364,
    names: { en: 'Jeremiah', hi: 'यिर्मयाह', as: 'যিৰিমিয়া' },
    abbreviation: { en: 'Jer', hi: 'यिर', as: 'যিৰি' },
  },
  {
    id: 25,
    code: 'LAM',
    testament: 'old',
    chapters: 5,
    totalVerses: 154,
    names: { en: 'Lamentations', hi: 'विलापगीत', as: 'বিলাপগীত' },
    abbreviation: { en: 'Lam', hi: 'विला', as: 'বিলা' },
  },
  {
    id: 26,
    code: 'EZK',
    testament: 'old',
    chapters: 48,
    totalVerses: 1273,
    names: { en: 'Ezekiel', hi: 'यहेजकेल', as: 'যিহিজিকেল' },
    abbreviation: { en: 'Ezk', hi: 'यहे', as: 'যিহি' },
  },
  {
    id: 27,
    code: 'DAN',
    testament: 'old',
    chapters: 12,
    totalVerses: 357,
    names: { en: 'Daniel', hi: 'दानिय्येल', as: 'দানিয়েল' },
    abbreviation: { en: 'Dan', hi: 'दानि', as: 'দানি' },
  },
  
  // Minor Prophets
  {
    id: 28,
    code: 'HOS',
    testament: 'old',
    chapters: 14,
    totalVerses: 197,
    names: { en: 'Hosea', hi: 'होशे', as: 'হোচিয়া' },
    abbreviation: { en: 'Hos', hi: 'होशे', as: 'হোচি' },
  },
  {
    id: 29,
    code: 'JOL',
    testament: 'old',
    chapters: 3,
    totalVerses: 73,
    names: { en: 'Joel', hi: 'योएल', as: 'যোৱেল' },
    abbreviation: { en: 'Jol', hi: 'योएल', as: 'যোৱে' },
  },
  {
    id: 30,
    code: 'AMO',
    testament: 'old',
    chapters: 9,
    totalVerses: 146,
    names: { en: 'Amos', hi: 'आमोस', as: 'আমোচ' },
    abbreviation: { en: 'Amo', hi: 'आमो', as: 'আমো' },
  },
  {
    id: 31,
    code: 'OBA',
    testament: 'old',
    chapters: 1,
    totalVerses: 21,
    names: { en: 'Obadiah', hi: 'ओबद्याह', as: 'ওবদিয়া' },
    abbreviation: { en: 'Oba', hi: 'ओबद', as: 'ওবদ' },
  },
  {
    id: 32,
    code: 'JON',
    testament: 'old',
    chapters: 4,
    totalVerses: 48,
    names: { en: 'Jonah', hi: 'योना', as: 'যোনা' },
    abbreviation: { en: 'Jon', hi: 'योना', as: 'যোনা' },
  },
  {
    id: 33,
    code: 'MIC',
    testament: 'old',
    chapters: 7,
    totalVerses: 105,
    names: { en: 'Micah', hi: 'मीका', as: 'মীখা' },
    abbreviation: { en: 'Mic', hi: 'मीका', as: 'মীখা' },
  },
  {
    id: 34,
    code: 'NAM',
    testament: 'old',
    chapters: 3,
    totalVerses: 47,
    names: { en: 'Nahum', hi: 'नहूम', as: 'নহূম' },
    abbreviation: { en: 'Nam', hi: 'नहूम', as: 'নহূম' },
  },
  {
    id: 35,
    code: 'HAB',
    testament: 'old',
    chapters: 3,
    totalVerses: 56,
    names: { en: 'Habakkuk', hi: 'हबक्कूक', as: 'হাবাকুক' },
    abbreviation: { en: 'Hab', hi: 'हबक', as: 'হাবা' },
  },
  {
    id: 36,
    code: 'ZEP',
    testament: 'old',
    chapters: 3,
    totalVerses: 53,
    names: { en: 'Zephaniah', hi: 'सपन्याह', as: 'চফনিয়া' },
    abbreviation: { en: 'Zep', hi: 'सपन', as: 'চফনি' },
  },
  {
    id: 37,
    code: 'HAG',
    testament: 'old',
    chapters: 2,
    totalVerses: 38,
    names: { en: 'Haggai', hi: 'हाग्गै', as: 'হগয়' },
    abbreviation: { en: 'Hag', hi: 'हाग', as: 'হগয়' },
  },
  {
    id: 38,
    code: 'ZEC',
    testament: 'old',
    chapters: 14,
    totalVerses: 211,
    names: { en: 'Zechariah', hi: 'जकर्याह', as: 'জখৰিয়া' },
    abbreviation: { en: 'Zec', hi: 'जक', as: 'জখ' },
  },
  {
    id: 39,
    code: 'MAL',
    testament: 'old',
    chapters: 4,
    totalVerses: 55,
    names: { en: 'Malachi', hi: 'मलाकी', as: 'মালাখি' },
    abbreviation: { en: 'Mal', hi: 'मला', as: 'মালা' },
  },
  
  // NEW TESTAMENT (27 Books)
  // Gospels
  {
    id: 40,
    code: 'MAT',
    testament: 'new',
    chapters: 28,
    totalVerses: 1071,
    names: { en: 'Matthew', hi: 'मत्ती', as: 'মথি' },
    abbreviation: { en: 'Mat', hi: 'मत्ती', as: 'মথি' },
  },
  {
    id: 41,
    code: 'MRK',
    testament: 'new',
    chapters: 16,
    totalVerses: 678,
    names: { en: 'Mark', hi: 'मरकुस', as: 'মাৰ্ক' },
    abbreviation: { en: 'Mrk', hi: 'मर', as: 'মাৰ্ক' },
  },
  {
    id: 42,
    code: 'LUK',
    testament: 'new',
    chapters: 24,
    totalVerses: 1151,
    names: { en: 'Luke', hi: 'लूका', as: 'লূক' },
    abbreviation: { en: 'Luk', hi: 'लूका', as: 'লূক' },
  },
  {
    id: 43,
    code: 'JHN',
    testament: 'new',
    chapters: 21,
    totalVerses: 879,
    names: { en: 'John', hi: 'यूहन्ना', as: 'যোহন' },
    abbreviation: { en: 'Jhn', hi: 'यूह', as: 'যোহ' },
  },
  
  // Acts
  {
    id: 44,
    code: 'ACT',
    testament: 'new',
    chapters: 28,
    totalVerses: 1007,
    names: { en: 'Acts', hi: 'प्रेरितों के काम', as: 'কাৰ্যসমূহ' },
    abbreviation: { en: 'Act', hi: 'प्रेरित', as: 'কাৰ্য' },
  },
  
  // Pauline Epistles
  {
    id: 45,
    code: 'ROM',
    testament: 'new',
    chapters: 16,
    totalVerses: 433,
    names: { en: 'Romans', hi: 'रोमियों', as: 'ৰোমীয়া' },
    abbreviation: { en: 'Rom', hi: 'रोम', as: 'ৰোম' },
  },
  {
    id: 46,
    code: '1CO',
    testament: 'new',
    chapters: 16,
    totalVerses: 437,
    names: { en: '1 Corinthians', hi: '1 कुरिन्थियों', as: '1 কৰিন্থীয়া' },
    abbreviation: { en: '1Co', hi: '1कुरि', as: '1কৰি' },
  },
  {
    id: 47,
    code: '2CO',
    testament: 'new',
    chapters: 13,
    totalVerses: 257,
    names: { en: '2 Corinthians', hi: '2 कुरिन्थियों', as: '2 কৰিন্থীয়া' },
    abbreviation: { en: '2Co', hi: '2कुरि', as: '2কৰি' },
  },
  {
    id: 48,
    code: 'GAL',
    testament: 'new',
    chapters: 6,
    totalVerses: 149,
    names: { en: 'Galatians', hi: 'गलातियों', as: 'গালাটিয়া' },
    abbreviation: { en: 'Gal', hi: 'गला', as: 'গালা' },
  },
  {
    id: 49,
    code: 'EPH',
    testament: 'new',
    chapters: 6,
    totalVerses: 155,
    names: { en: 'Ephesians', hi: 'इफिसियों', as: 'ইফিচীয়া' },
    abbreviation: { en: 'Eph', hi: 'इफि', as: 'ইফি' },
  },
  {
    id: 50,
    code: 'PHP',
    testament: 'new',
    chapters: 4,
    totalVerses: 104,
    names: { en: 'Philippians', hi: 'फिलिप्पियों', as: 'ফিলিপ্পীয়া' },
    abbreviation: { en: 'Php', hi: 'फिलि', as: 'ফিলি' },
  },
  {
    id: 51,
    code: 'COL',
    testament: 'new',
    chapters: 4,
    totalVerses: 95,
    names: { en: 'Colossians', hi: 'कुलुस्सियों', as: 'কলচীয়া' },
    abbreviation: { en: 'Col', hi: 'कुलु', as: 'কলচ' },
  },
  {
    id: 52,
    code: '1TH',
    testament: 'new',
    chapters: 5,
    totalVerses: 89,
    names: { en: '1 Thessalonians', hi: '1 थिस्सलुनीकियों', as: '1 থেচলনীকীয়া' },
    abbreviation: { en: '1Th', hi: '1थिस', as: '1থেচ' },
  },
  {
    id: 53,
    code: '2TH',
    testament: 'new',
    chapters: 3,
    totalVerses: 47,
    names: { en: '2 Thessalonians', hi: '2 थिस्सलुनीकियों', as: '2 থেচলনীকীয়া' },
    abbreviation: { en: '2Th', hi: '2थिस', as: '2থেচ' },
  },
  {
    id: 54,
    code: '1TI',
    testament: 'new',
    chapters: 6,
    totalVerses: 113,
    names: { en: '1 Timothy', hi: '1 तीमुथियुस', as: '1 তীমথীয়' },
    abbreviation: { en: '1Ti', hi: '1तीमु', as: '1তীম' },
  },
  {
    id: 55,
    code: '2TI',
    testament: 'new',
    chapters: 4,
    totalVerses: 83,
    names: { en: '2 Timothy', hi: '2 तीमुथियुस', as: '2 তীমথীয়' },
    abbreviation: { en: '2Ti', hi: '2तीमु', as: '2তীম' },
  },
  {
    id: 56,
    code: 'TIT',
    testament: 'new',
    chapters: 3,
    totalVerses: 46,
    names: { en: 'Titus', hi: 'तीतुस', as: 'তীত' },
    abbreviation: { en: 'Tit', hi: 'तीतु', as: 'তীত' },
  },
  {
    id: 57,
    code: 'PHM',
    testament: 'new',
    chapters: 1,
    totalVerses: 25,
    names: { en: 'Philemon', hi: 'फिलेमोन', as: 'ফিলীমন' },
    abbreviation: { en: 'Phm', hi: 'फिले', as: 'ফিলী' },
  },
  
  // General Epistles
  {
    id: 58,
    code: 'HEB',
    testament: 'new',
    chapters: 13,
    totalVerses: 303,
    names: { en: 'Hebrews', hi: 'इब्रानियों', as: 'ইব্ৰী' },
    abbreviation: { en: 'Heb', hi: 'इब्रा', as: 'ইব্ৰী' },
  },
  {
    id: 59,
    code: 'JAS',
    testament: 'new',
    chapters: 5,
    totalVerses: 108,
    names: { en: 'James', hi: 'याकूब', as: 'যাকোব' },
    abbreviation: { en: 'Jas', hi: 'याकू', as: 'যাকো' },
  },
  {
    id: 60,
    code: '1PE',
    testament: 'new',
    chapters: 5,
    totalVerses: 105,
    names: { en: '1 Peter', hi: '1 पतरस', as: '1 পিতৰ' },
    abbreviation: { en: '1Pe', hi: '1पत', as: '1পিত' },
  },
  {
    id: 61,
    code: '2PE',
    testament: 'new',
    chapters: 3,
    totalVerses: 61,
    names: { en: '2 Peter', hi: '2 पतरस', as: '2 পিতৰ' },
    abbreviation: { en: '2Pe', hi: '2पत', as: '2পিত' },
  },
  {
    id: 62,
    code: '1JN',
    testament: 'new',
    chapters: 5,
    totalVerses: 105,
    names: { en: '1 John', hi: '1 यूहन्ना', as: '1 যোহন' },
    abbreviation: { en: '1Jn', hi: '1यूह', as: '1যোহ' },
  },
  {
    id: 63,
    code: '2JN',
    testament: 'new',
    chapters: 1,
    totalVerses: 13,
    names: { en: '2 John', hi: '2 यूहन्ना', as: '2 যোহন' },
    abbreviation: { en: '2Jn', hi: '2यूह', as: '2যোহ' },
  },
  {
    id: 64,
    code: '3JN',
    testament: 'new',
    chapters: 1,
    totalVerses: 14,
    names: { en: '3 John', hi: '3 यूहन्ना', as: '3 যোহন' },
    abbreviation: { en: '3Jn', hi: '3यूह', as: '3যোহ' },
  },
  {
    id: 65,
    code: 'JUD',
    testament: 'new',
    chapters: 1,
    totalVerses: 25,
    names: { en: 'Jude', hi: 'यहूदा', as: 'যিহূদা' },
    abbreviation: { en: 'Jud', hi: 'यहू', as: 'যিহূ' },
  },
  
  // Revelation
  {
    id: 66,
    code: 'REV',
    testament: 'new',
    chapters: 22,
    totalVerses: 404,
    names: { en: 'Revelation', hi: 'प्रकाशित वाक्य', as: 'প্ৰকাশিত বাক্য' },
    abbreviation: { en: 'Rev', hi: 'प्रका', as: 'প্ৰকা' },
  },
];

// Helper functions
export const getBookByCode = (code: string): BibleBook | undefined => {
  return BIBLE_BOOKS.find(book => book.code === code);
};

export const getBookById = (id: number): BibleBook | undefined => {
  return BIBLE_BOOKS.find(book => book.id === id);
};

export const getOldTestamentBooks = (): BibleBook[] => {
  return BIBLE_BOOKS.filter(book => book.testament === 'old');
};

export const getNewTestamentBooks = (): BibleBook[] => {
  return BIBLE_BOOKS.filter(book => book.testament === 'new');
};

export const getTotalChapters = (): number => {
  return BIBLE_BOOKS.reduce((sum, book) => sum + book.chapters, 0);
};

export const getTotalVerses = (): number => {
  return BIBLE_BOOKS.reduce((sum, book) => sum + book.totalVerses, 0);
};

// Bible Statistics
export const BIBLE_STATS = {
  totalBooks: 66,
  oldTestamentBooks: 39,
  newTestamentBooks: 27,
  totalChapters: 1189,
  totalVerses: 31102,
  oldTestamentChapters: 929,
  newTestamentChapters: 260,
  oldTestamentVerses: 23145,
  newTestamentVerses: 7957,
};
