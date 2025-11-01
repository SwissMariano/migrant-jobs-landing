"use client";
import Link from "next/link";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const privacyTranslations = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated:",
    intro: "At Dana Rey, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform to connect with job opportunities and community support.",
    backToHome: "← Back to home",
    sections: {
      introTitle: "1. Introduction",
      collectTitle: "2. Information We Collect",
      collectPersonal: "Personal Information",
      collectAuto: "Automatically Collected Information",
      useTitle: "3. How We Use Your Information",
      sharingTitle: "4. Data Sharing and Disclosure",
      sharingIntro: "We do not sell your personal information. We may share your information only in the following circumstances:",
      sharingEmployers: "With Employers & NGOs:",
      sharingProviders: "Service Providers:",
      sharingLegal: "Legal Requirements:",
      sharingTransfer: "Business Transfers:",
      securityTitle: "5. Data Security",
      securityText: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      rightsTitle: "6. Your Rights (GDPR & Privacy Rights)",
      rightsIntro: "Depending on your location, you may have the following rights:",
      rightsAccess: "Access:",
      rightsCorrection: "Correction:",
      rightsDeletion: "Deletion:",
      rightsPortability: "Data Portability:",
      rightsObjection: "Objection:",
      rightsWithdraw: "Withdraw Consent:",
      rightsContact: "To exercise these rights, please contact us at",
      cookiesTitle: "7. Cookies and Analytics",
      cookiesText: "We use cookies and similar technologies to analyze usage patterns and improve our platform. We use Vercel Analytics, which is privacy-friendly and does not require cookies. You can control cookies through your browser settings.",
      retentionTitle: "8. Data Retention",
      retentionText: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When you delete your account or request deletion, we will remove your personal information, subject to legal retention requirements.",
      childrenTitle: "9. Children's Privacy",
      childrenText: "Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.",
      transfersTitle: "10. International Data Transfers",
      transfersText: "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.",
      changesTitle: "11. Changes to This Privacy Policy",
      changesText: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the \"Last updated\" date. Your continued use of our platform after such changes constitutes acceptance of the updated policy.",
      contactTitle: "12. Contact Us",
      contactIntro: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
      contactEmail: "Email:",
      contactGeneral: "General Contact:",
    },
    listItems: {
      personal1: "Name and contact information (email, phone number)",
      personal2: "Language preferences",
      personal3: "Skills, work experience, and availability",
      personal4: "Location information (city, country)",
      personal5: "Profile information you choose to provide",
      auto1: "Device information and browser type",
      auto2: "IP address and general location",
      auto3: "Usage data and interactions with our platform",
      auto4: "Cookies and similar tracking technologies",
      use1: "Matching you with relevant job opportunities and employers",
      use2: "Connecting you with NGOs and community support services",
      use3: "Communicating with you about opportunities and platform updates",
      use4: "Improving our services and user experience",
      use5: "Complying with legal obligations and protecting our rights",
      use6: "Sending you updates (with your consent) via email or WhatsApp",
      sharing1: "To facilitate job matching and support connections (only with your consent)",
      sharing2: "With trusted third-party services that help us operate our platform (e.g., hosting, analytics)",
      sharing3: "When required by law or to protect our rights and safety",
      sharing4: "In connection with a merger, acquisition, or sale of assets (with notice to users)",
      rights1: "Request a copy of the personal information we hold about you",
      rights2: "Request correction of inaccurate or incomplete information",
      rights3: "Request deletion of your personal information",
      rights4: "Request transfer of your data to another service",
      rights5: "Object to certain types of processing",
      rights6: "Withdraw consent for data processing at any time",
    },
  },
  de: {
    title: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert:",
    intro: "Bei Dana Rey sind wir dem Schutz Ihrer Privatsphäre verpflichtet. Diese Datenschutzerklärung erläutert, wie wir Ihre Informationen sammeln, verwenden, offenlegen und schützen, wenn Sie unsere Plattform nutzen, um sich mit Arbeitsmöglichkeiten und Gemeinschaftsunterstützung zu verbinden.",
    backToHome: "← Zurück zur Startseite",
    sections: {
      introTitle: "1. Einführung",
      collectTitle: "2. Informationen, die wir sammeln",
      collectPersonal: "Persönliche Informationen",
      collectAuto: "Automatisch gesammelte Informationen",
      useTitle: "3. Wie wir Ihre Informationen verwenden",
      sharingTitle: "4. Datenweitergabe und Offenlegung",
      sharingIntro: "Wir verkaufen Ihre persönlichen Daten nicht. Wir können Ihre Informationen nur unter den folgenden Umständen weitergeben:",
      sharingEmployers: "Mit Arbeitgebern & NGOs:",
      sharingProviders: "Dienstleister:",
      sharingLegal: "Rechtliche Anforderungen:",
      sharingTransfer: "Unternehmensübertragungen:",
      securityTitle: "5. Datensicherheit",
      securityText: "Wir implementieren angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer persönlichen Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung. Jedoch ist keine Übertragungsmethode über das Internet 100% sicher, und wir können absolute Sicherheit nicht garantieren.",
      rightsTitle: "6. Ihre Rechte (DSGVO & Datenschutzrechte)",
      rightsIntro: "Abhängig von Ihrem Standort haben Sie möglicherweise die folgenden Rechte:",
      rightsAccess: "Zugriff:",
      rightsCorrection: "Berichtigung:",
      rightsDeletion: "Löschung:",
      rightsPortability: "Datenübertragbarkeit:",
      rightsObjection: "Widerspruch:",
      rightsWithdraw: "Einwilligung widerrufen:",
      rightsContact: "Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter",
      cookiesTitle: "7. Cookies und Analysen",
      cookiesText: "Wir verwenden Cookies und ähnliche Technologien, um Nutzungsmuster zu analysieren und unsere Plattform zu verbessern. Wir verwenden Vercel Analytics, das datenschutzfreundlich ist und keine Cookies erfordert. Sie können Cookies über Ihre Browsereinstellungen steuern.",
      retentionTitle: "8. Datenspeicherung",
      retentionText: "Wir speichern Ihre persönlichen Daten nur so lange, wie es zur Erfüllung der in dieser Richtlinie beschriebenen Zwecke erforderlich ist, es sei denn, eine längere Aufbewahrungsfrist ist gesetzlich vorgeschrieben. Wenn Sie Ihr Konto löschen oder die Löschung beantragen, entfernen wir Ihre persönlichen Daten, vorbehaltlich gesetzlicher Aufbewahrungsanforderungen.",
      childrenTitle: "9. Datenschutz für Kinder",
      childrenText: "Unsere Plattform richtet sich nicht an Personen unter 18 Jahren. Wir sammeln nicht wissentlich persönliche Daten von Kindern. Wenn Sie glauben, dass wir Informationen von einem Kind gesammelt haben, kontaktieren Sie uns bitte sofort.",
      transfersTitle: "10. Internationale Datenübertragungen",
      transfersText: "Ihre Informationen können in Länder außerhalb Ihres Wohnsitzlandes übertragen und dort verarbeitet werden. Wir stellen sicher, dass angemessene Schutzmaßnahmen vorhanden sind, um Ihre Daten gemäß dieser Datenschutzerklärung zu schützen.",
      changesTitle: "11. Änderungen an dieser Datenschutzerklärung",
      changesText: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite veröffentlichen und das Datum \"Zuletzt aktualisiert\" aktualisieren. Ihre weitere Nutzung unserer Plattform nach solchen Änderungen stellt die Annahme der aktualisierten Richtlinie dar.",
      contactTitle: "12. Kontaktieren Sie uns",
      contactIntro: "Wenn Sie Fragen, Bedenken oder Anfragen bezüglich dieser Datenschutzerklärung oder unserer Datenerfassungspraktiken haben, kontaktieren Sie uns bitte:",
      contactEmail: "E-Mail:",
      contactGeneral: "Allgemeiner Kontakt:",
    },
    listItems: {
      personal1: "Name und Kontaktinformationen (E-Mail, Telefonnummer)",
      personal2: "Spracheinstellungen",
      personal3: "Fähigkeiten, Berufserfahrung und Verfügbarkeit",
      personal4: "Standortinformationen (Stadt, Land)",
      personal5: "Profilinformationen, die Sie bereitstellen möchten",
      auto1: "Geräteinformationen und Browsertyp",
      auto2: "IP-Adresse und allgemeiner Standort",
      auto3: "Nutzungsdaten und Interaktionen mit unserer Plattform",
      auto4: "Cookies und ähnliche Tracking-Technologien",
      use1: "Vermittlung passender Arbeitsmöglichkeiten und Arbeitgeber",
      use2: "Vermittlung zu NGOs und Gemeinschaftsunterstützungsdiensten",
      use3: "Kommunikation mit Ihnen über Möglichkeiten und Plattform-Updates",
      use4: "Verbesserung unserer Dienste und Benutzererfahrung",
      use5: "Einhaltung gesetzlicher Verpflichtungen und Schutz unserer Rechte",
      use6: "Übersendung von Updates (mit Ihrer Einwilligung) per E-Mail oder WhatsApp",
      sharing1: "Zur Erleichterung der Jobvermittlung und Unterstützungsverbindungen (nur mit Ihrer Einwilligung)",
      sharing2: "Mit vertrauenswürdigen Drittanbietern, die uns beim Betrieb unserer Plattform helfen (z. B. Hosting, Analysen)",
      sharing3: "Wenn gesetzlich vorgeschrieben oder zum Schutz unserer Rechte und Sicherheit",
      sharing4: "Im Zusammenhang mit einer Fusion, Übernahme oder Veräußerung von Vermögenswerten (mit Benachrichtigung an Benutzer)",
      rights1: "Anforderung einer Kopie der persönlichen Informationen, die wir über Sie haben",
      rights2: "Anforderung der Berichtigung ungenauer oder unvollständiger Informationen",
      rights3: "Anforderung der Löschung Ihrer persönlichen Informationen",
      rights4: "Anforderung der Übertragung Ihrer Daten an einen anderen Dienst",
      rights5: "Widerspruch gegen bestimmte Arten der Verarbeitung",
      rights6: "Widerruf der Einwilligung zur Datenverarbeitung jederzeit",
    },
  },
  fr: {
    title: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour :",
    intro: "Chez Dana Rey, nous nous engageons à protéger votre vie privée. Cette Politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre plateforme pour vous connecter à des opportunités d'emploi et à un soutien communautaire.",
    backToHome: "← Retour à l'accueil",
    sections: {
      introTitle: "1. Introduction",
      collectTitle: "2. Informations que nous collectons",
      collectPersonal: "Informations personnelles",
      collectAuto: "Informations collectées automatiquement",
      useTitle: "3. Comment nous utilisons vos informations",
      sharingTitle: "4. Partage et divulgation de données",
      sharingIntro: "Nous ne vendons pas vos informations personnelles. Nous pouvons partager vos informations uniquement dans les circonstances suivantes :",
      sharingEmployers: "Avec les employeurs et ONG :",
      sharingProviders: "Fournisseurs de services :",
      sharingLegal: "Exigences légales :",
      sharingTransfer: "Transferts d'entreprise :",
      securityTitle: "5. Sécurité des données",
      securityText: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction. Cependant, aucune méthode de transmission sur Internet n'est 100% sécurisée, et nous ne pouvons garantir une sécurité absolue.",
      rightsTitle: "6. Vos droits (RGPD et droits à la vie privée)",
      rightsIntro: "Selon votre localisation, vous pouvez avoir les droits suivants :",
      rightsAccess: "Accès :",
      rightsCorrection: "Correction :",
      rightsDeletion: "Suppression :",
      rightsPortability: "Portabilité des données :",
      rightsObjection: "Opposition :",
      rightsWithdraw: "Retrait du consentement :",
      rightsContact: "Pour exercer ces droits, veuillez nous contacter à",
      cookiesTitle: "7. Cookies et analyses",
      cookiesText: "Nous utilisons des cookies et des technologies similaires pour analyser les modèles d'utilisation et améliorer notre plateforme. Nous utilisons Vercel Analytics, qui est respectueux de la vie privée et ne nécessite pas de cookies. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.",
      retentionTitle: "8. Conservation des données",
      retentionText: "Nous conservons vos informations personnelles uniquement aussi longtemps que nécessaire pour remplir les objectifs décrits dans cette politique, sauf si une période de conservation plus longue est requise par la loi. Lorsque vous supprimez votre compte ou demandez la suppression, nous supprimerons vos informations personnelles, sous réserve des exigences légales de conservation.",
      childrenTitle: "9. Vie privée des enfants",
      childrenText: "Notre plateforme n'est pas destinée aux personnes de moins de 18 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. Si vous pensez que nous avons collecté des informations auprès d'un enfant, veuillez nous contacter immédiatement.",
      transfersTitle: "10. Transferts internationaux de données",
      transfersText: "Vos informations peuvent être transférées et traitées dans des pays autres que votre pays de résidence. Nous nous assurons que des garanties appropriées sont en place pour protéger vos données conformément à cette Politique de confidentialité.",
      changesTitle: "11. Modifications de cette Politique de confidentialité",
      changesText: "Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Nous vous informerons de tout changement important en publiant la nouvelle politique sur cette page et en mettant à jour la date de \"Dernière mise à jour\". Votre utilisation continue de notre plateforme après de tels changements constitue une acceptation de la politique mise à jour.",
      contactTitle: "12. Contactez-nous",
      contactIntro: "Si vous avez des questions, des préoccupations ou des demandes concernant cette Politique de confidentialité ou nos pratiques de données, veuillez nous contacter :",
      contactEmail: "E-mail :",
      contactGeneral: "Contact général :",
    },
    listItems: {
      personal1: "Nom et informations de contact (e-mail, numéro de téléphone)",
      personal2: "Préférences linguistiques",
      personal3: "Compétences, expérience professionnelle et disponibilité",
      personal4: "Informations de localisation (ville, pays)",
      personal5: "Informations de profil que vous choisissez de fournir",
      auto1: "Informations sur l'appareil et type de navigateur",
      auto2: "Adresse IP et localisation générale",
      auto3: "Données d'utilisation et interactions avec notre plateforme",
      auto4: "Cookies et technologies de suivi similaires",
      use1: "Vous mettre en relation avec des opportunités d'emploi et des employeurs pertinents",
      use2: "Vous connecter avec des ONG et des services de soutien communautaire",
      use3: "Vous communiquer sur les opportunités et les mises à jour de la plateforme",
      use4: "Améliorer nos services et l'expérience utilisateur",
      use5: "Se conformer aux obligations légales et protéger nos droits",
      use6: "Vous envoyer des mises à jour (avec votre consentement) par e-mail ou WhatsApp",
      sharing1: "Pour faciliter la correspondance d'emplois et les connexions de soutien (uniquement avec votre consentement)",
      sharing2: "Avec des services tiers de confiance qui nous aident à exploiter notre plateforme (par exemple, hébergement, analyses)",
      sharing3: "Lorsque requis par la loi ou pour protéger nos droits et notre sécurité",
      sharing4: "Dans le cadre d'une fusion, d'une acquisition ou d'une vente d'actifs (avec notification aux utilisateurs)",
      rights1: "Demander une copie des informations personnelles que nous détenons sur vous",
      rights2: "Demander la correction d'informations inexactes ou incomplètes",
      rights3: "Demander la suppression de vos informations personnelles",
      rights4: "Demander le transfert de vos données à un autre service",
      rights5: "Vous opposer à certains types de traitement",
      rights6: "Retirer votre consentement au traitement des données à tout moment",
    },
  },
  uk: {
    title: "Політика конфіденційності",
    lastUpdated: "Останнє оновлення:",
    intro: "У Dana Rey ми зобов'язуємося захищати вашу конфіденційність. Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо, розкриваємо та захищаємо вашу інформацію, коли ви використовуєте нашу платформу для зв'язку з можливостями працевлаштування та підтримкою спільноти.",
    backToHome: "← Повернутися на головну",
    sections: {
      introTitle: "1. Вступ",
      collectTitle: "2. Інформація, яку ми збираємо",
      collectPersonal: "Особиста інформація",
      collectAuto: "Автоматично зібрана інформація",
      useTitle: "3. Як ми використовуємо вашу інформацію",
      sharingTitle: "4. Обмін та розкриття даних",
      sharingIntro: "Ми не продаємо вашу особисту інформацію. Ми можемо ділитися вашою інформацією лише в наступних обставинах:",
      sharingEmployers: "З роботодавцями та НГО:",
      sharingProviders: "Постачальники послуг:",
      sharingLegal: "Юридичні вимоги:",
      sharingTransfer: "Бізнес-передачі:",
      securityTitle: "5. Безпека даних",
      securityText: "Ми впроваджуємо відповідні технічні та організаційні заходи для захисту вашої особистої інформації від несанкціонованого доступу, змін, розкриття або знищення. Однак жоден метод передачі через інтернет не є 100% безпечним, і ми не можемо гарантувати абсолютну безпеку.",
      rightsTitle: "6. Ваші права (GDPR та права на конфіденційність)",
      rightsIntro: "Залежно від вашого місцезнаходження, ви можете мати наступні права:",
      rightsAccess: "Доступ:",
      rightsCorrection: "Виправлення:",
      rightsDeletion: "Видалення:",
      rightsPortability: "Портативність даних:",
      rightsObjection: "Заперечення:",
      rightsWithdraw: "Відкликання згоди:",
      rightsContact: "Щоб скористатися цими правами, будь ласка, зв'яжіться з нами за адресою",
      cookiesTitle: "7. Файли cookie та аналітика",
      cookiesText: "Ми використовуємо файли cookie та подібні технології для аналізу шаблонів використання та покращення нашої платформи. Ми використовуємо Vercel Analytics, який є безпечним для конфіденційності та не вимагає файлів cookie. Ви можете контролювати файли cookie через налаштування вашого браузера.",
      retentionTitle: "8. Зберігання даних",
      retentionText: "Ми зберігаємо вашу особисту інформацію лише стільки, скільки необхідно для виконання цілей, викладених у цій політиці, якщо більш тривалий період зберігання не вимагається законом. Коли ви видаляєте свій обліковий запис або просите видалення, ми видалимо вашу особисту інформацію, з урахуванням юридичних вимог до зберігання.",
      childrenTitle: "9. Конфіденційність дітей",
      childrenText: "Наша платформа не призначена для осіб віком до 18 років. Ми свідомо не збираємо особисту інформацію від дітей. Якщо ви вважаєте, що ми зібрали інформацію від дитини, будь ласка, негайно зв'яжіться з нами.",
      transfersTitle: "10. Міжнародні передачі даних",
      transfersText: "Ваша інформація може бути передана та оброблена в країнах, відмінних від вашої країни проживання. Ми забезпечуємо відповідні гарантії для захисту ваших даних відповідно до цієї Політики конфіденційності.",
      changesTitle: "11. Зміни в цій Політиці конфіденційності",
      changesText: "Ми можемо час від часу оновлювати цю Політику конфіденційності. Ми повідомимо вас про будь-які суттєві зміни, опублікувавши нову політику на цій сторінці та оновивши дату \"Останнє оновлення\". Ваше подальше використання нашої платформи після таких змін означає прийняття оновленої політики.",
      contactTitle: "12. Зв'яжіться з нами",
      contactIntro: "Якщо у вас є питання, занепокоєння або запити щодо цієї Політики конфіденційності або наших практик обробки даних, будь ласка, зв'яжіться з нами:",
      contactEmail: "Електронна пошта:",
      contactGeneral: "Загальний контакт:",
    },
    listItems: {
      personal1: "Ім'я та контактна інформація (електронна пошта, номер телефону)",
      personal2: "Мовні уподобання",
      personal3: "Навички, трудовий досвід та доступність",
      personal4: "Інформація про місцезнаходження (місто, країна)",
      personal5: "Інформація профілю, яку ви вибираєте надати",
      auto1: "Інформація про пристрій та тип браузера",
      auto2: "IP-адреса та загальне місцезнаходження",
      auto3: "Дані про використання та взаємодії з нашою платформою",
      auto4: "Файли cookie та подібні технології відстеження",
      use1: "Підбір відповідних можливостей працевлаштування та роботодавців",
      use2: "Зв'язок з НГО та службами підтримки спільноти",
      use3: "Спілкування з вами про можливості та оновлення платформи",
      use4: "Покращення наших послуг та користувацького досвіду",
      use5: "Дотримання юридичних зобов'язань та захист наших прав",
      use6: "Надсилання вам оновлень (з вашою згодою) через електронну пошту або WhatsApp",
      sharing1: "Для сприяння підбору роботи та зв'язків підтримки (лише з вашою згодою)",
      sharing2: "З надійними сторонніми службами, які допомагають нам керувати нашою платформою (наприклад, хостинг, аналітика)",
      sharing3: "Коли це вимагається законом або для захисту наших прав та безпеки",
      sharing4: "У зв'язку зі злиттям, поглинанням або продажем активів (з повідомленням користувачів)",
      rights1: "Запит копії особистої інформації, яку ми маємо про вас",
      rights2: "Запит виправлення неточної або неповної інформації",
      rights3: "Запит видалення вашої особистої інформації",
      rights4: "Запит передачі ваших даних до іншого сервісу",
      rights5: "Заперечення проти певних типів обробки",
      rights6: "Відкликання згоди на обробку даних у будь-який час",
    },
  },
};

export default function PrivacyPage() {
  const { language, t } = useLanguage();
  const privacyT = privacyTranslations[language] || privacyTranslations.en;
  
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{privacyT.title}</h1>
        <p className="text-gray-600 mb-8">{privacyT.lastUpdated} {new Date().toLocaleDateString(language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : language === 'fr' ? 'fr-FR' : 'uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.introTitle}</h2>
            <p className="text-gray-700 leading-relaxed">
              {privacyT.intro}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.collectTitle}</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">{privacyT.sections.collectPersonal}</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{privacyT.listItems.personal1}</li>
                  <li>{privacyT.listItems.personal2}</li>
                  <li>{privacyT.listItems.personal3}</li>
                  <li>{privacyT.listItems.personal4}</li>
                  <li>{privacyT.listItems.personal5}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 mt-4">{privacyT.sections.collectAuto}</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{privacyT.listItems.auto1}</li>
                  <li>{privacyT.listItems.auto2}</li>
                  <li>{privacyT.listItems.auto3}</li>
                  <li>{privacyT.listItems.auto4}</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.useTitle}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>{privacyT.listItems.use1}</li>
              <li>{privacyT.listItems.use2}</li>
              <li>{privacyT.listItems.use3}</li>
              <li>{privacyT.listItems.use4}</li>
              <li>{privacyT.listItems.use5}</li>
              <li>{privacyT.listItems.use6}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.sharingTitle}</h2>
            <p className="text-gray-700 mb-4">
              {privacyT.sections.sharingIntro}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>{privacyT.sections.sharingEmployers}</strong> {privacyT.listItems.sharing1}</li>
              <li><strong>{privacyT.sections.sharingProviders}</strong> {privacyT.listItems.sharing2}</li>
              <li><strong>{privacyT.sections.sharingLegal}</strong> {privacyT.listItems.sharing3}</li>
              <li><strong>{privacyT.sections.sharingTransfer}</strong> {privacyT.listItems.sharing4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.securityTitle}</h2>
            <p className="text-gray-700 leading-relaxed">
              {privacyT.sections.securityText}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.rightsTitle}</h2>
            <p className="text-gray-700 mb-4">{privacyT.sections.rightsIntro}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>{privacyT.sections.rightsAccess}</strong> {privacyT.listItems.rights1}</li>
              <li><strong>{privacyT.sections.rightsCorrection}</strong> {privacyT.listItems.rights2}</li>
              <li><strong>{privacyT.sections.rightsDeletion}</strong> {privacyT.listItems.rights3}</li>
              <li><strong>{privacyT.sections.rightsPortability}</strong> {privacyT.listItems.rights4}</li>
              <li><strong>{privacyT.sections.rightsObjection}</strong> {privacyT.listItems.rights5}</li>
              <li><strong>{privacyT.sections.rightsWithdraw}</strong> {privacyT.listItems.rights6}</li>
            </ul>
            <p className="text-gray-700 mt-4">
              {privacyT.sections.rightsContact} <a href="mailto:privacy@example.com" className="text-black underline">privacy@example.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.cookiesTitle}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {privacyT.sections.cookiesText}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.retentionTitle}</h2>
            <p className="text-gray-700 leading-relaxed">
              {privacyT.sections.retentionText}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.childrenTitle}</h2>
            <p className="text-gray-700 leading-relaxed">
              {privacyT.sections.childrenText}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.transfersTitle}</h2>
            <p className="text-gray-700 leading-relaxed">
              {privacyT.sections.transfersText}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.changesTitle}</h2>
            <p className="text-gray-700 leading-relaxed">
              {privacyT.sections.changesText}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{privacyT.sections.contactTitle}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {privacyT.sections.contactIntro}
            </p>
            <div className="text-gray-700 space-y-2">
              <p><strong>{privacyT.sections.contactEmail}</strong> <a href="mailto:privacy@example.com" className="text-black underline">privacy@example.com</a></p>
              <p><strong>{privacyT.sections.contactGeneral}</strong> <a href="mailto:hello@example.com" className="text-black underline">hello@example.com</a></p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link 
            href="/" 
            className="text-black hover:underline focus:outline-none focus:ring"
          >
            {privacyT.backToHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
