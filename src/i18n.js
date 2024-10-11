// src/i18n.js
import { createI18n } from 'vue-i18n'
import Portfolio from './components/Portfolio.vue'

// Define messages for each locale
const messages = {
  khm: {
    HOME: 'ទំព័រដើម',
    PORTFOLIO: 'ស្នាដៃ',
    ABOUT: 'អំពីខ្ញុំ',
    BLOG: 'ប្លុក',
    CONTACT: 'ទំនាក់ទំនងខ្ញុំ',
    Dsp: 'រុករកការងាររបស់ខ្ញុំ ហើយមានអារម្មណ៍សេរីដើម្បីទាក់ទងទៅ ប្រសិនបើអ្នកចង់សហការ ឬស្វែងយល់បន្ថែមអំពីអ្វីដែលខ្ញុំអាចធ្វើបាន!',
    Sme:'ខ្ញុំជា Frontend-Developer នៅភ្នំពេញ ប្រទេសកម្ពុជា។ ជាមួយនឹងចំណង់ចំណូលចិត្តចំពោះបច្ចេកវិទ្យា និងការសរសេរកូដ ខ្ញុំមានជំនាញក្នុងការបង្កើតគេហទំព័រទំនើប ឆ្លើយតប និងកម្មវិធីគេហទំព័រ',
    Dsm: 'ខ្ញុំជាអ្នកបង្កើតគេហទំព័រដែលមានចំណាប់អារម្មណ៍មានមូលដ្ឋាននៅទីក្រុងភ្នំពេញ ឧទ្ទិសដល់ការបង្កើតគេហទំព័រ និងកម្មវិធីដែលមានលក្ខណៈវិចារណញាណ ប្រសិទ្ធភាព និងទាក់ទាញ។ ជាមួយនឹងមូលដ្ឋានគ្រឹះដ៏រឹងមាំនៅក្នុងបច្ចេកវិទ្យាគេហទំព័រទំនើប និងការយកចិត្តទុកដាក់ក្នុងការរចនា ខ្ញុំមានជំនាញក្នុងការបង្កើតបទពិសោធន៍ឌីជីថលដែលងាយស្រួលប្រើ និងឆ្លើយតប។'
  },
  en: {
    Home: 'Home',
    Dsp: 'Explore my work and feel free to reach out if you d like to collaborate or learn more about what I can do!',
    Sme: 'I am Frontend-Developer in Phnom Penh, Cambodia. With a passion for technology and coding, you specialize in creating modern, responsive websites and web applications.',
    Dsm: 'I am a passionate web developer based in Phnom Penh, dedicated to creating intuitive, efficient, and visually appealing websites and applications. With a strong foundation in modern web technologies and a keen eye for design, I specialize in building responsive, user-friendly digital experiences.'

  }
}

// Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n