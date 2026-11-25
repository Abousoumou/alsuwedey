/* ============================================================
   1. I18N TRANSLATIONS
============================================================ */
const translations = {
  en: {
    brand: "ALSUWEDEY", brandSub: "Delivery Services",
    navHome: "Home", navAbout: "About Us", navPartnership: "Partnership", navBulk: "Bulk Parcels",
    navOnline: "Online Platform", navContact: "Contact", navPortals: "Portals",
    heroTitle: "Delivering Trust, Every Mile.",
    heroSub: "From food partnerships to bulk parcels and on‑demand online delivery — ALSUWEDEY moves what matters across the UAE.",
    heroCta1: "Book a Delivery", heroCta2: "Explore Services",
    quickAccessTitle: "Quick Access", quickAccessSub: "Everything you need, one tap away.",
    quick1Title: "Food Partnerships", quick1Desc: "KEETA & CAREEM delivery operations.",
    quick2Title: "Bulk Parcels", quick2Desc: "High‑volume logistics across the Emirates.",
    quick3Title: "Online Platform", quick3Desc: "Book on‑demand delivery at deliveryforless.vercel.app",
    quick4Title: "Track Your Order", quick4Desc: "Customer and driver dashboards.",
    servicesTitle: "Our Services", servicesSub: "Three specialised departments. One standard of reliability.",
    svcPartnership: "Partnership Department", svcPartnershipDesc: "Strategic food‑delivery collaborations with KEETA and CAREEM.",
    svcBulk: "Bulk Parcels Department", svcBulkDesc: "Scheduled, high‑volume consignments for retailers and corporates.",
    svcOnline: "Online Department", svcOnlineDesc: "On‑demand platform with API integration for online stores.",
    learnMore: "Learn More", ctaTitle: "Ready to ship?", ctaSub: "Get a quote in 60 seconds. We reply within one business hour.", ctaBtn: "Contact Us Now",
    aboutTitle: "About ALSUWEDEY Delivery Services",
    aboutBody: `<p><strong>ALSUWEDEY Delivery Services</strong> was founded with a single, uncompromising belief: that delivery is not merely the movement of a parcel from one point to another, but the transfer of a promise. In a market as fast‑paced and demanding as the United Arab Emirates, where expectations are high and time is the ultimate currency, we set out to build a company that would never treat a delivery as just another transaction. Every envelope, every parcel, every meal, and every bulk consignment carries with it the trust of a customer who has chosen us—and that trust is the foundation upon which this company stands.</p>
    <p>Our journey began with a focused operation serving local businesses in Dubai. In those early days, the fleet was small, the team was tight‑knit, and every delivery was personal. We learned the rhythms of the city—the quiet early‑morning hours when bulk shipments need to move, the lunchtime rush when food partnerships demand precision, and the late‑night e‑commerce orders that keep the digital economy alive. This hands‑on experience taught us that reliability is not a feature you advertise; it is a reputation you earn, mile after mile. As demand grew, so did we, expanding our capabilities without ever losing the operational discipline that defined our beginnings.</p>
    <p>Today, ALSUWEDEY Delivery Services operates through three specialised departments, each designed to serve a distinct need while sharing the same commitment to excellence. Our <strong>Partnership Department</strong> manages strategic collaborations with leading food delivery platforms, including KEETA and CAREEM, ensuring that partner restaurants and customers experience seamless fulfilment. Our <strong>Bulk Parcels Delivery Services Department</strong> handles high‑volume consignments for retailers, wholesalers, and corporate clients who require reliable, scheduled movement of goods across the Emirates. And our <strong>Online Department</strong> powers a general delivery platform that connects individuals and small businesses to on‑demand logistics through a dedicated digital interface.</p>
    <p>What distinguishes ALSUWEDEY Delivery Services in a crowded market is not simply the breadth of our services, but the depth of our operational philosophy. We invest in our people—drivers who know the roads, dispatchers who understand urgency, and support staff who treat every inquiry with respect. We invest in technology that provides visibility, because a customer who can see where their parcel is at any given moment is a customer who can plan, operate, and grow with confidence. And we invest in partnerships that are built on mutual accountability, not convenience.</p>
    <p>Our vision is to become the most trusted delivery partner in the UAE—not the largest by fleet size, but the most dependable by reputation. As we continue to expand our service coverage across the seven emirates, we remain anchored to the values that shaped us: transparency in pricing, accountability in execution, and respect for every customer regardless of the size of their consignment.</p>`,
    ownerTestimonialTitle: "Owner Testimonial", photoPlaceholder: "Owner Photo",
    ownerQuote: `"When I started this company, I had one van and one promise: that no customer would ever wonder where their delivery was. That promise still drives every decision we make."`,
    ownerName: "— Founder & Owner, ALSUWEDEY Delivery Services",
    managerTitle: "A Word from the Department Managers",
    manager1Quote: `"Working with KEETA and CAREEM means operating at the pace of the UAE's food economy. Our role is to make that pace seamless."`, manager1Name: "— Partnership Department Manager",
    manager2Quote: `"Bulk delivery is not about speed alone—it is about coordination. We deliver certainty at scale."`, manager2Name: "— Bulk Parcels Department Manager",
    manager3Quote: `"The deliveryforless platform was built because we saw a gap between what customers needed and what the market offered. We close that gap."`, manager3Name: "— Online Department Manager",
    profileTitle: "Company Profile", profileLegal: "Legal Name:", profileHQ: "Headquarters:", profileCoverage: "Service Coverage:", profileCore: "Core Competencies:", 
    profileSpecialties: "Specialized Logistics:", specialtiesText: "Pharmacy deliveries, flowers shops, chocolate shops, and restaurant moving services.",
    profileFleet: "Fleet:", profileTech: "Technology:",
    partnershipTitle: "Partnership Department", partnershipSub: "Powering the UAE's food delivery ecosystem with KEETA and CAREEM.",
    keetaDesc: "Supporting KEETA's rapid expansion across all seven emirates with reliable last‑mile delivery capacity, dedicated dispatch coordination, and peak‑hour surge handling.",
    careemDesc: "Consistent delivery execution that matches CAREEM's established service standards, with real‑time exception handling and a single point of accountability.",
    partnershipFactsTitle: "Quick Facts", partnershipFact1: "2 major food‑delivery partnerships", partnershipFact2: "All‑emirate coverage", partnershipFact3: "Peak‑hour surge capacity", partnershipFact4: "Dedicated partnership support line",
    bulkTitle: "Bulk Parcels Delivery Services", bulkSub: "Certainty at scale—for retailers, wholesalers, and corporate clients.",
    bulkBody: "Bulk parcels are not simply many small deliveries. They are a logistics discipline of their own. Whether you are dispatching daily e‑commerce orders, moving stock between warehouses, or sending documents across the Emirates, our Bulk Parcels Department is built for volume without compromise.",
    bulkFeat1Title: "Scheduled Pickups", bulkFeat1Desc: "Collection schedules built around your operational rhythm.",
    bulkFeat2Title: "Cross‑Emirate Routing", bulkFeat2Desc: "Efficient consolidation and routing for high volumes.",
    bulkFeat3Title: "Manifest Visibility", bulkFeat3Desc: "Know what has moved and what remains, at any moment.",
    onlineTitle: "Online Department — General Delivery Platform", onlineSub: "Your delivery needs, one platform.",
    onlineBody: "The Online Department operates our general delivery platform at deliveryforless.vercel.app—a digital gateway designed for individuals and small‑to‑medium businesses who need straightforward, on‑demand delivery without enterprise complexity.",
    onlineFeat1Title: "Instant Booking", onlineFeat1Desc: "Book a delivery in seconds from any device.",
    onlineFeat2Title: "API for Online Stores", onlineFeat2Desc: "Orders flow directly into our dispatch system.",
    onlineFeat3Title: "Customer Dashboard", onlineFeat3Desc: "Track orders, payments, and history in one place.",
    contactTitle: "Contact Us", contactSub: "We're here, however you need us.",
    supportChannels: "Support Channels", whatsappLabel: "WhatsApp:", mobileLabel: "Mobile:", emailLabel: "Email:", addressLabel: "Address:",
    faqTitle: "FAQs", faq1Q: "How do I book a delivery?", faq1A: "Via the online platform, the Book a Delivery button, or by contacting support.",
    faq2Q: "What areas do you cover?", faq2A: "All seven emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain.",
    faq3Q: "Do you integrate with my online store?", faq3A: "Yes, via API integration through the Online Department.",
    faq4Q: "How do I file a complaint?", faq4A: "Use the contact form with \"Complaint\" in the subject, or call the support line. All complaints receive a response within 24 hours.",
    contactFormTitle: "Send a Message", formName: "Full Name", formEmail: "Email", formPhone: "Phone (optional)", formDept: "Department",
    formDeptPartnership: "Partnership", formDeptBulk: "Bulk Parcels", formDeptOnline: "Online", formDeptGeneral: "General",
    formSubject: "Subject", formMessage: "Message", formSubmit: "Send Message", formSuccess: "✅ Message sent! We will reply within one business hour.",
    portalsTitle: "Customer & Driver Portals", portalsSub: "Mock dashboards for demonstration. Replace with real authentication and API data.",
    customerPortalBtn: "Customer Portal", driverPortalBtn: "Driver Portal",
    dashMenu: "Menu", dashOverview: "Overview", dashOrders: "Order Management", dashPayments: "Payments & History", dashProfile: "Profile",
    kpiActive: "Active Orders", kpiDelivered: "Delivered", kpiSpent: "This Month",
    recentOrders: "Recent Orders", tableId: "ID", tableDate: "Date", tableStatus: "Status", tableService: "Service",
    statusDelivered: "Delivered", statusTransit: "In Transit", statusPending: "Pending",
    dashToday: "Today's Assignments", dashRoute: "Route View", dashEarnings: "Earnings", dashHistoryDriver: "History",
    kpiAssigned: "Assigned Today", kpiCompleted: "Completed This Week", kpiEarnings: "Earnings",
    assignedOrders: "Assigned Orders", tableAddress: "Address", tableAction: "Action", acceptBtn: "Accept", deliveredBtn: "Mark Delivered",
    footerCompany: "Company", footerContact: "Contact", footerCoverage: "Coverage", footerFollow: "Follow Us", footerLegal: "Legal",
    privacyPolicy: "Privacy Policy", termsOfService: "Terms of Service", allRights: "All rights reserved.", sloganFooter: "Delivering Trust, Every Mile.",
    fleetTitle: "Our Growing Fleet & Specialized Training",
    fleetP1: "In the fast-paced world of logistics, having the right vehicle for the right job is not just an advantage; it is a necessity. At ALSUWEDEY Delivery Services, we take immense pride in our rapidly expanding fleet, which is growing from day to day to meet the diverse and evolving demands of our clients across the UAE. We do not believe in a one-size-fits-all approach. Instead, we offer a versatile, multi-modal transportation network designed to handle any requirement, no matter how unique or challenging it may be.",
    fleetP2: "Our fleet is a testament to our commitment to flexibility and efficiency. It includes a wide array of vehicles tailored to specific delivery needs. For rapid, nimble deliveries through congested urban areas, we utilize motorbikes and scooters. For eco-friendly, short-distance drops, our bicycles are always in action. When it comes to last-mile deliveries that require a human touch and navigation through pedestrian-heavy zones or specific building complexes, our dedicated DA walkers step in. For larger loads, we deploy cars and heavy-duty pickups. And for massive, industrial-scale hauling, our trucks are ready to move.",
    fleetP3: "Currently, we have more than 145 elements of our fleet actively in action across the region. This impressive number is not a static figure; it is a dynamic metric that reflects our continuous investment in our operational capacity. As our client base grows, our fleet grows with it. We are constantly onboarding new vehicles, upgrading our existing models, and expanding our reach to ensure that we never compromise on delivery times or service quality, regardless of the order volume.",
    fleetP4: "But having a large fleet is only half the battle. The true engine of our operations is our people. We insist on a deep, large, and highly specific training program for our Delivery Agents (DAs). We believe that a driver is not just a person behind the wheel; they are the face of our company, the custodians of our clients goods, and the final link in the supply chain. Therefore, our training goes far beyond basic driving skills.",
    fleetP5: "Our DA training program is comprehensive and multifaceted. It covers advanced defensive driving techniques, ensuring the safety of the cargo, the driver, and the public. It includes rigorous customer service modules, teaching our agents how to handle delicate situations, communicate effectively, and maintain a professional demeanor at all times. We also provide specific training on handling sensitive items, such as pharmaceuticals and fragile floral arrangements, ensuring they reach their destination in pristine condition.",
    fleetP6: "Furthermore, our DAs are trained extensively in local geography and navigation. While we rely on cutting-edge routing technology, we believe that a driver who knows the streets, the traffic patterns, and the hidden shortcuts of Abu Dhabi and Dubai is an invaluable asset. This local knowledge allows us to bypass unexpected road closures and traffic jams, ensuring that our delivery windows are consistently met, even during peak hours.",
    fleetP7: "We are proud to say that our operations currently cover all of Abu Dhabi and Dubai extensively. Whether it is a residential drop in a quiet neighborhood or a bulk delivery to a bustling commercial hub, our trained DAs and diverse fleet are equipped to handle it all. We are not just delivering parcels; we are delivering peace of mind, backed by a robust infrastructure and a team that is trained to perfection.",
    daTitle: "Driver (DA) Joining Request", partnerTitle: "Partnership Request",
    privacyTitle: "Privacy Policy",
    privacyBody: `<p>Last updated: November 2026</p><p>At ALSUWEDEY Delivery Services LLC, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.</p>
    <h3>1. Information We Collect</h3><p>We collect information you provide directly to us, such as your name, email address, phone number, delivery addresses, and payment information when you book a delivery or contact us.</p>
    <h3>2. How We Use Your Information</h3><p>We use your information to fulfill your delivery requests, communicate with you about your orders, process payments, and improve our services. We may also use your information for marketing purposes, which you can opt out of at any time.</p>
    <h3>3. Sharing Your Information</h3><p>We may share your information with third-party service providers (such as KEETA and CAREEM) strictly for the purpose of fulfilling your delivery. We do not sell your personal data.</p>
    <h3>4. Data Security</h3><p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
    <h3>5. Contact Us</h3><p>If you have any questions about this Privacy Policy, please contact us at alswaididelivery@gmail.com.</p>`,
    termsTitle: "Terms & Conditions of Service",
    termsBody: `<p>Last updated: November 2026</p><p>Welcome to ALSUWEDEY Delivery Services LLC. By using our services, you agree to these Terms & Conditions.</p>
    <h3>1. Services</h3><p>We provide delivery and logistics services within the United Arab Emirates, including food, pharmacy, flowers, chocolates, bulk parcels, and restaurant moving services.</p>
    <h3>2. User Responsibilities</h3><p>You agree to provide accurate information regarding pickup and delivery locations, package contents, and contact details. You agree not to use our services for illegal or prohibited items.</p>
    <h3>3. Pricing and Payment</h3><p>Prices for our services are subject to change. Payment must be completed upon booking unless otherwise agreed upon in writing.</p>
    <h3>4. Limitation of Liability</h3><p>ALSUWEDEY Delivery Services LLC is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our liability for any claim is limited to the fees paid for the specific delivery.</p>
    <h3>5. Governing Law</h3><p>These terms are governed by the laws of the United Arab Emirates.</p>`,
  },
  ar: {
    brand: "السويدي", brandSub: "لخدمات التوصيل",
    navHome: "الرئيسية", navAbout: "من نحن", navPartnership: "الشراكات", navBulk: "الطرود بالجملة",
    navOnline: "المنصة الإلكترونية", navContact: "اتصل بنا", navPortals: "البوابات",
    heroTitle: "نوصل الثقة في كل ميل.",
    heroSub: "من شراكات الطعام إلى الطرود بالجملة والتوصيل الإلكتروني عند الطلب — السويدي تنقل ما يهم في جميع أنحاء الإمارات.",
    heroCta1: "احجز توصيلاً", heroCta2: "استكشف الخدمات",
    quickAccessTitle: "وصول سريع", quickAccessSub: "كل ما تحتاجه، بضغطة واحدة.",
    quick1Title: "شراكات الطعام", quick1Desc: "عمليات التوصيل مع كيتا وكريم.",
    quick2Title: "الطرود بالجملة", quick2Desc: "خدمات لوجستية عالية الحجم في جميع الإمارات.",
    quick3Title: "المنصة الإلكترونية", quick3Desc: "احجز توصيلاً عند الطلب عبر deliveryforless.vercel.app",
    quick4Title: "تتبع طلبك", quick4Desc: "لوحات تحكم العملاء والسائقين.",
    servicesTitle: "خدماتنا", servicesSub: "ثلاثة أقسام متخصصة. معيار واحد للموثوقية.",
    svcPartnership: "قسم الشراكات", svcPartnershipDesc: "تعاون استراتيجي في توصيل الطعام مع كيتا وكريم.",
    svcBulk: "قسم الطرود بالجملة", svcBulkDesc: "شحنات مجدولة عالية الحجم لتجار التجزئة والشركات.",
    svcOnline: "القسم الإلكتروني", svcOnlineDesc: "منصة عند الطلب مع تكامل API للمتاجر الإلكترونية.",
    learnMore: "اعرف المزيد", ctaTitle: "مستعد للشحن؟", ctaSub: "احصل على عرض سعر في 60 ثانية. نرد خلال ساعة عمل واحدة.", ctaBtn: "اتصل بنا الآن",
    aboutTitle: "عن السويدي لخدمات التوصيل",
    aboutBody: `<p><strong>تأسست السويدي لخدمات التوصيل</strong> على إيمان واحد لا يتزعزع: أن التوصيل ليس مجرد نقل طرد من نقطة إلى أخرى، بل هو نقل وعد. في سوق سريع ومتطلب مثل الإمارات العربية المتحدة، حيث التوقعات عالية والوقت هو العملة النهائية، انطلقنا لبناء شركة لن تتعامل أبداً مع التوصيل كمجرد معاملة. كل مظروف، كل طرد، كل وجبة، وكل شحنة بالجملة تحمل ثقة العميل الذي اختارنا — وهذه الثقة هي الأساس الذي تقف عليه هذه الشركة.</p>
    <p>بدأت رحلتنا بعملية مركزة تخدم الشركات المحلية في دبي. في تلك الأيام المبكرة، كان الأسطول صغيراً، والفريق متماسكاً، وكل توصيل شخصياً. تعلمنا إيقاعات المدينة — ساعات الصباح الهادئة عندما تحتاج الشحنات بالجملة إلى التحرك، وذروة الغداء عندما تتطلب شراكات الطعام الدقة، وطلبات التجارة الإلكترونية في وقت متأخر من الليل التي تبقي الاقتصاد الرقمي حياً. علمتنا هذه التجربة العملية أن الموثوقية ليست ميزة تعلن عنها؛ بل هي سمعة تكسبها ميلاً بعد ميل.</p>
    <p>اليوم، تعمل السويدي لخدمات التوصيل من خلال ثلاثة أقسام متخصصة، كل منها مصمم لخدمة حاجة مميزة مع مشاركة نفس الالتزام بالتميز. يدير <strong>قسم الشراكات</strong> تعاونات استراتيجية مع منصات توصيل الطعام الرائدة، بما في ذلك كيتا وكريم. يتولى <strong>قسم خدمات توصيل الطرود بالجملة</strong> الشحنات عالية الحجم لتجار التجزئة وتجار الجملة والعملاء من الشركات. ويدعم <strong>القسم الإلكتروني</strong> منصة توصيل عامة تربط الأفراد والشركات الصغيرة بالخدمات اللوجستية عند الطلب.</p>
    <p>ما يميز السويدي لخدمات التوصيل في سوق مزدحم ليس فقط اتساع خدماتنا، بل عمق فلسفتنا التشغيلية. نستثمر في موظفينا — سائقين يعرفون الطرق، ومرسلين يفهمون الاستعجال، وموظفي دعم يعاملون كل استفسار باحترام. ونستثمر في الشراكات القائمة على المساءلة المتبادلة، وليس على الراحة.</p>`,
    ownerTestimonialTitle: "شهادة المالك", photoPlaceholder: "صورة المالك",
    ownerQuote: `"عندما بدأت هذه الشركة، كان لدي شاحنة واحدة ووعد واحد: ألا يتساءل أي عميل أبداً عن مكان توصيله. هذا الوعد لا يزال يقود كل قرار نتخذه."`,
    ownerName: "— المؤسس والمالك، السويدي لخدمات التوصيل",
    managerTitle: "كلمة من مديري الأقسام",
    manager1Quote: `"العمل مع كيتا وكريم يعني العمل بوتيرة اقتصاد الطعام في الإمارات. دورنا هو جعل هذه الوتيرة سلسة."`, manager1Name: "— مدير قسم الشراكات",
    manager2Quote: `"التوصيل بالجملة لا يتعلق بالسرعة وحدها — بل بالتنسيق. نحن نقدم اليقين على نطاق واسع."`, manager2Name: "— مدير قسم الطرود بالجملة",
    manager3Quote: `"تم بناء منصة deliveryforless لأننا رأينا فجوة بين ما يحتاجه العملاء وما يقدمه السوق. نحن نغلق تلك الفجوة."`, manager3Name: "— مدير القسم الإلكتروني",
    profileTitle: "الملف التعريفي للشركة", profileLegal: "الاسم القانوني:", profileHQ: "المقر الرئيسي:", profileCoverage: "تغطية الخدمة:", profileCore: "الكفاءات الأساسية:", 
    profileSpecialties: "الخدمات اللوجستية المتخصصة:", specialtiesText: "توصيل الأدوية، محلات الزهور، محلات الشوكولاتة، وخدمات نقل المطاعم.",
    profileFleet: "الأسطول:", profileTech: "التكنولوجيا:",
    partnershipTitle: "قسم الشراكات", partnershipSub: "ندعم منظومة توصيل الطعام في الإمارات مع كيتا وكريم.",
    keetaDesc: "دعم التوسع السريع لكيتا عبر الإمارات السبع بقدرة توصيل موثوقة للميل الأخير.",
    careemDesc: "تنفيذ توصيل متسق يتوافق مع معايير الخدمة الراسخة لكريم، مع معالجة الاستثناءات في الوقت الفعلي.",
    partnershipFactsTitle: "حقائق سريعة", partnershipFact1: "شراكتان رئيسيتان لتوصيل الطعام", partnershipFact2: "تغطية جميع الإمارات", partnershipFact3: "قدرة استيعابية في ساعات الذروة", partnershipFact4: "خط دعم مخصص للشراكات",
    bulkTitle: "خدمات توصيل الطرود بالجملة", bulkSub: "اليقين على نطاق واسع — لتجار التجزئة وتجار الجملة والعملاء من الشركات.",
    bulkBody: "الطرود بالجملة ليست مجرد عمليات توصيل صغيرة كثيرة. إنها تخصص لوجستي قائم بذاته. سواء كنت ترسل طلبات التجارة الإلكترونية اليومية، أو تنقل المخزون بين المستودعات، فإن قسم الطرود بالجملة لدينا مبني للحجم دون مساومة.",
    bulkFeat1Title: "عمليات استلام مجدولة", bulkFeat1Desc: "جداول جمع مبنية حول إيقاعك التشغيلي.",
    bulkFeat2Title: "التوجيه عبر الإمارات", bulkFeat2Desc: "توحيد وتوجيه فعال للأحجام الكبيرة.",
    bulkFeat3Title: "رؤية البيان", bulkFeat3Desc: "اعرف ما تم نقله وما تبقى، في أي لحظة.",
    onlineTitle: "القسم الإلكتروني — منصة التوصيل العامة", onlineSub: "احتياجات التوصيل الخاصة بك، منصة واحدة.",
    onlineBody: "يدير القسم الإلكتروني منصة التوصيل العامة لدينا على deliveryforless.vercel.app — بوابة رقمية مصممة للأفراد والشركات الصغيرة والمتوسطة.",
    onlineFeat1Title: "حجز فوري", onlineFeat1Desc: "احجز توصيلاً في ثوانٍ من أي جهاز.",
    onlineFeat2Title: "API للمتاجر الإلكترونية", onlineFeat2Desc: "تتدفق الطلبات مباشرة إلى نظام الإرسال لدينا.",
    onlineFeat3Title: "لوحة تحكم العملاء", onlineFeat3Desc: "تتبع الطلبات والمدفوعات والسجل في مكان واحد.",
    contactTitle: "اتصل بنا", contactSub: "نحن هنا، بالطريقة التي تحتاجها.",
    supportChannels: "قنوات الدعم", whatsappLabel: "واتساب:", mobileLabel: "الجوال:", emailLabel: "البريد الإلكتروني:", addressLabel: "العنوان:",
    faqTitle: "الأسئلة الشائعة", faq1Q: "كيف أحجز توصيلاً؟", faq1A: "عبر المنصة الإلكترونية، أو زر حجز توصيل، أو بالاتصال بالدعم.",
    faq2Q: "ما المناطق التي تغطونها؟", faq2A: "جميع الإمارات السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، أم القيوين.",
    faq3Q: "هل تتكاملون مع متجري الإلكتروني؟", faq3A: "نعم، عبر تكامل API من خلال القسم الإلكتروني.",
    faq4Q: "كيف أقدم شكوى؟", faq4A: "استخدم نموذج الاتصال مع وضع \"شكوى\" في الموضوع، أو اتصل بخط الدعم. تتلقى جميع الشكاوى رداً خلال 24 ساعة.",
    contactFormTitle: "أرسل رسالة", formName: "الاسم الكامل", formEmail: "البريد الإلكتروني", formPhone: "الهاتف (اختياري)", formDept: "القسم",
    formDeptPartnership: "الشراكات", formDeptBulk: "الطرود بالجملة", formDeptOnline: "الإلكتروني", formDeptGeneral: "عام",
    formSubject: "الموضوع", formMessage: "الرسالة", formSubmit: "إرسال الرسالة", formSuccess: "✅ تم إرسال الرسالة! سنرد خلال ساعة عمل واحدة.",
    portalsTitle: "بوابات العملاء والسائقين", portalsSub: "لوحات تحكم تجريبية للعرض.",
    customerPortalBtn: "بوابة العميل", driverPortalBtn: "بوابة السائق",
    dashMenu: "القائمة", dashOverview: "نظرة عامة", dashOrders: "إدارة الطلبات", dashPayments: "المدفوعات والسجل", dashProfile: "الملف الشخصي",
    kpiActive: "طلبات نشطة", kpiDelivered: "تم التوصيل", kpiSpent: "هذا الشهر",
    recentOrders: "الطلبات الأخيرة", tableId: "المعرف", tableDate: "التاريخ", tableStatus: "الحالة", tableService: "الخدمة",
    statusDelivered: "تم التوصيل", statusTransit: "قيد النقل", statusPending: "قيد الانتظار",
    dashToday: "مهام اليوم", dashRoute: "عرض المسار", dashEarnings: "الأرباح", dashHistoryDriver: "السجل",
    kpiAssigned: "مكلف اليوم", kpiCompleted: "مكتمل هذا الأسبوع", kpiEarnings: "الأرباح",
    assignedOrders: "الطلبات المكلفة", tableAddress: "العنوان", tableAction: "الإجراء", acceptBtn: "قبول", deliveredBtn: "تحديد كمُسلَّم",
    footerCompany: "الشركة", footerContact: "الاتصال", footerCoverage: "التغطية", footerFollow: "تابعنا", footerLegal: "قانوني",
    privacyPolicy: "سياسة الخصوصية", termsOfService: "شروط الخدمة", allRights: "جميع الحقوق محفوظة.", sloganFooter: "نوصل الثقة في كل ميل.",
    privacyTitle: "سياسة الخصوصية",
    privacyBody: `<p>آخر تحديث: نوفمبر 2026</p><p>في السويدي لخدمات التوصيل، نحن ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند استخدام خدماتنا.</p>
    <h3>1. المعلومات التي نجمعها</h3><p>نجمع المعلومات التي تقدمها لنا مباشرة، مثل اسمك وبريدك الإلكتروني ورقم هاتفك وعناوين التوصيل ومعلومات الدفع عند حجز توصيل أو الاتصال بنا.</p>
    <h3>2. كيف نستخدم معلوماتك</h3><p>نستخدم معلوماتك لتلبية طلبات التوصيل الخاصة بك، والتواصل معك بشأن طلباتك، ومعالجة المدفوعات، وتحسين خدماتنا.</p>
    <h3>3. مشاركة معلوماتك</h3><p>قد نشارك معلوماتك مع مزودي خدمات خارجيين (مثل كيتا وكريم) فقط لغرض إتمام التوصيل. نحن لا نبيع بياناتك الشخصية.</p>
    <h3>4. أمن البيانات</h3><p>نطبق تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح.</p>
    <h3>5. اتصل بنا</h3><p>إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على alswaididelivery@gmail.com.</p>`,
    termsTitle: "الشروط والأحكام",
    termsBody: `<p>آخر تحديث: نوفمبر 2026</p><p>مرحبًا بك في السويدي لخدمات التوصيل. باستخدامك لخدماتنا، فإنك توافق على هذه الشروط والأحكام.</p>
    <h3>1. الخدمات</h3><p>نحن نقدم خدمات التوصيل والخدمات اللوجستية داخل الإمارات العربية المتحدة، بما في ذلك الطعام، والأدوية، والزهور، والشوكولاتة، والطرود بالجملة، وخدمات نقل المطاعم.</p>
    <h3>2. مسؤوليات المستخدم</h3><p>أنت توافق على تقديم معلومات دقيقة بشأن مواقع الاستلام والتوصيل، ومحتويات الطرود، وتفاصيل الاتصال. وتوافق على عدم استخدام خدماتنا للعناصر غير القانونية أو المحظورة.</p>
    <h3>3. التسعير والدفع</h3><p>تخضع أسعار خدماتنا للتغيير. يجب إتمام الدفع عند الحجز ما لم يتم الاتفاق على خلاف ذلك كتابيًا.</p>
    <h3>4. حدود المسؤولية</h3><p>السويدي لخدمات التوصيل غير مسؤولة عن الأضرار غير المباشرة أو العرضية أو التبعية الناشئة عن استخدام خدماتنا.</p>
    <h3>5. القانون الحاكم</h3><p>تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة.</p>`
  },
  ur: {
    brand: "السويدي", brandSub: "ڈیلیوری سروسز",
    navHome: "ہوم", navAbout: "ہمارے بارے میں", navPartnership: "شراکت داری", navBulk: "بلک پارسلز",
    navOnline: "آن لائن پلیٹ فارم", navContact: "رابطہ", navPortals: "پورٹلز",
    heroTitle: "ہر میل پر اعتبار پہنچانا۔",
    heroSub: "کھانے کی شراکت داری سے لے کر بلک پارسلز اور آن ڈیمانڈ آن لائن ڈیلیوری تک — السويدي پورے متحدہ عرب امارات میں وہ پہنچاتا ہے جو اہم ہے۔",
    heroCta1: "ڈیلیوری بک کریں", heroCta2: "خدمات دیکھیں",
    quickAccessTitle: "فوری رسائی", quickAccessSub: "آپ کو جو چاہیے، ایک ٹیپ پر۔",
    quick1Title: "کھانے کی شراکت داری", quick1Desc: "کیٹا اور کریم کے ساتھ ڈیلیوری آپریشنز۔",
    quick2Title: "بلک پارسلز", quick2Desc: "امارات بھر میں زیادہ حجم کی لاجسٹکس۔",
    quick3Title: "آن لائن پلیٹ فارم", quick3Desc: "deliveryforless.vercel.app پر آن ڈیمانڈ ڈیلیوری بک کریں",
    quick4Title: "اپنا آرڈر ٹریک کریں", quick4Desc: "کسٹمر اور ڈرائیور ڈیش بورڈز۔",
    servicesTitle: "ہماری خدمات", servicesSub: "تین خصوصی محکمے۔ اعتبار کا ایک معیار۔",
    svcPartnership: "شراکت داری کا محکمہ", svcPartnershipDesc: "کیٹا اور کریم کے ساتھ کھانے کی ڈیلیوری میں اسٹریٹجک تعاون۔",
    svcBulk: "بلک پارسلز کا محکمہ", svcBulkDesc: "ریٹیلرز اور کارپوریٹس کے لیے شیڈول شدہ، زیادہ حجم کی کھیپ۔",
    svcOnline: "آن لائن محکمہ", svcOnlineDesc: "آن لائن اسٹورز کے لیے API انٹیگریشن کے ساتھ آن ڈیمانڈ پلیٹ فارم۔",
    learnMore: "مزید جانیں", ctaTitle: "شپنگ کے لیے تیار؟", ctaSub: "60 سیکنڈ میں کوٹ حاصل کریں۔ ہم ایک کاروباری گھنٹے میں جواب دیتے ہیں۔", ctaBtn: "ابھی رابطہ کریں",
    aboutTitle: "السويدي ڈیلیوری سروسز کے بارے میں",
    aboutBody: `<p><strong>السويدي ڈیلیوری سروسز</strong> ایک غیر متزلزل یقین کے ساتھ قائم کی گئی تھی: کہ ڈیلیوری صرف ایک پارسل کو ایک جگہ سے دوسری جگہ منتقل کرنا نہیں ہے، بلکہ ایک وعدہ منتقل کرنا ہے۔ متحدہ عرب امارات جیسی تیز رفتار مارکیٹ میں، ہم نے ایک ایسی کمپنی بنانے کا ارادہ کیا جو کبھی بھی ڈیلیوری کو صرف ایک لین دین نہ سمجھے۔</p>
    <p>ہمارا سفر دبئی میں مقامی کاروباریوں کی خدمت کرنے والے ایک مرکوز آپریشن سے شروع ہوا۔ ان ابتدائی دنوں میں، بیڑا چھوٹا تھا، ٹیم قریبی تھی، اور ہر ڈیلیوری ذاتی تھی۔ ہم نے شہر کی تال سیکھی — وہ خاموش صبح کے اوقات جب بلک کھیپ کو حرکت کرنی ہوتی ہے، دوپہر کی رش جب کھانے کی شراکت داری درستگی کا مطالبہ کرتی ہے، اور رات گئے ای کامرس آرڈرز۔</p>
    <p>آج، السويدي ڈیلیوری سروسز تین خصوصی محکموں کے ذریعے کام کرتی ہے۔ ہمارا <strong>شراکت داری محکمہ</strong> معروف فوڈ ڈیلیوری پلیٹ فارمز کے ساتھ تعاون کا انتظام کرتا ہے۔ ہمارا <strong>بلک پارسلز محکمہ</strong> ریٹیلرز اور کارپوریٹ گاہکوں کے لیے کھیپ سنبھالتا ہے۔ اور ہمارا <strong>آن لائن محکمہ</strong> ایک عمومی ڈیلیوری پلیٹ فارم چلاتا ہے۔</p>
    <p>بھری مارکیٹ میں السويدي ڈیلیوری سروسز کو ممتاز کرنے والی چیز صرف ہماری خدمات کی وسعت نہیں ہے، بلکہ ہماری آپریشنل فلسفہ کی گہرائی ہے۔ ہم اپنے لوگوں میں سرمایہ کاری کرتے ہیں اور ایسی شراکت داریوں میں جو باہمی جوابدہی پر بنی ہیں۔</p>`,
    ownerTestimonialTitle: "مالک کی گواہی", photoPlaceholder: "مالک کی تصویر",
    ownerQuote: `"جب میں نے یہ کمپنی شروع کی، تو میرے پاس ایک وین اور ایک وعدہ تھا: کہ کوئی گاہک کبھی یہ نہ سوچے کہ اس کی ڈیلیوری کہاں ہے۔"`,
    ownerName: "— بانی اور مالک، السويدي ڈیلیوری سروسز",
    managerTitle: "محکمہ جات کے منتظمین کا پیغام",
    manager1Quote: `"کیٹا اور کریم کے ساتھ کام کرنے کا مطلب ہے یو اے ای کی خوراک کی معیشت کی رفتار پر چلنا۔"`, manager1Name: "— شراکت داری محکمہ کے منتظم",
    manager2Quote: `"بلک ڈیلیوری صرف رفتار کے بارے میں نہیں ہے — یہ ہم آہنگی کے بارے میں ہے۔"`, manager2Name: "— بلک پارسلز محکمہ کے منتظم",
    manager3Quote: `"deliveryforless پلیٹ فارم اس لیے بنایا گیا کیونکہ ہم نے گاہکوں کی ضروریات اور مارکیٹ کی پیشکش کے درمیان فرق دیکھا۔"`, manager3Name: "— آن لائن محکمہ کے منتظم",
    profileTitle: "کمپنی پروفائل", profileLegal: "قانونی نام:", profileHQ: "ہیڈ کوارٹر:", profileCoverage: "سروس کی کوریج:", profileCore: "بنیادی صلاحیتیں:", 
    profileSpecialties: "خصوصی لاجسٹکس:", specialtiesText: "فارمیسی ڈیلیوری، پھولوں کی دکانیں، چاکلیٹ کی دکانیں، اور ریستوران کی نقل و حمل کی خدمات۔",
    profileFleet: "بیڑا:", profileTech: "ٹیکنالوجی:",
    partnershipTitle: "شراکت داری محکمہ", partnershipSub: "کیٹا اور کریم کے ساتھ یو اے ای کے فوڈ ڈیلیوری ماحولیاتی نظام کو طاقت دینا۔",
    keetaDesc: "تمام سات امارات میں کیٹا کی تیز رفتار توسیع کی حمایت قابل اعتماد آخری میل ڈیلیوری صلاحیت کے ساتھ۔",
    careemDesc: "کریم کے قائم کردہ سروس معیارات سے مطابقت رکھنے والی مستقل ڈیلیوری۔",
    partnershipFactsTitle: "فوری حقائق", partnershipFact1: "2 بڑی فوڈ ڈیلیوری شراکت داریاں", partnershipFact2: "تمام امارات کی کوریج", partnershipFact3: "مصروف اوقات میں اضافی صلاحیت", partnershipFact4: "مخصوص شراکت داری سپورٹ لائن",
    bulkTitle: "بلک پارسلز ڈیلیوری سروسز", bulkSub: "پیمانے پر یقین — ریٹیلرز، ہول سیلرز، اور کارپوریٹ گاہکوں کے لیے۔",
    bulkBody: "بلک پارسلز صرف بہت سی چھوٹی ڈیلیوریاں نہیں ہیں۔ وہ اپنی ایک الگ لاجسٹک مہارت ہیں۔ چاہے آپ روزانہ ای کامرس آرڈرز بھیج رہے ہوں یا گوداموں کے درمیان اسٹاک منتقل کر رہے ہوں۔",
    bulkFeat1Title: "شیڈول شدہ پک اپ", bulkFeat1Desc: "آپ کی آپریشنل تال کے گرد بنائے گئے جمع کرنے کے شیڈول۔",
    bulkFeat2Title: "بین الامارات روٹنگ", bulkFeat2Desc: "زیادہ حجم کے لیے موثر استحکام اور روٹنگ۔",
    bulkFeat3Title: "مینی فیسٹ مرئیت", bulkFeat3Desc: "کسی بھی لمحے جانیں کہ کیا منتقل ہو چکا ہے اور کیا باقی ہے۔",
    onlineTitle: "آن لائن محکمہ — جنرل ڈیلیوری پلیٹ فارم", onlineSub: "آپ کی ڈیلیوری کی ضروریات، ایک پلیٹ فارم۔",
    onlineBody: "آن لائن محکمہ deliveryforless.vercel.app پر ہمارا جنرل ڈیلیوری پلیٹ فارم چلاتا ہے — ایک ڈیجیٹل گیٹ وے جو افراد اور چھوٹے کاروباریوں کے لیے ڈیزائن کیا گیا ہے۔",
    onlineFeat1Title: "فوری بکنگ", onlineFeat1Desc: "کسی بھی ڈیوائس سے سیکنڈوں میں ڈیلیوری بک کریں۔",
    onlineFeat2Title: "آن لائن اسٹورز کے لیے API", onlineFeat2Desc: "آرڈرز براہ راست ہمارے ڈسپیچ سسٹم میں آتے ہیں۔",
    onlineFeat3Title: "کسٹمر ڈیش بورڈ", onlineFeat3Desc: "ایک جگہ پر آرڈرز، ادائیگیاں، اور تاریخ ٹریک کریں۔",
    contactTitle: "ہم سے رابطہ کریں", contactSub: "ہم یہاں ہیں، جس طرح بھی آپ کو ضرورت ہو۔",
    supportChannels: "سپورٹ چینلز", whatsappLabel: "واٹس ایپ:", mobileLabel: "موبائل:", emailLabel: "ای میل:", addressLabel: "پتہ:",
    faqTitle: "عمومی سوالات", faq1Q: "میں ڈیلیوری کیسے بک کروں؟", faq1A: "آن لائن پلیٹ فارم، ڈیلیوری بک کریں بٹن، یا سپورٹ سے رابطہ کر کے۔",
    faq2Q: "آپ کون سے علاقے کور کرتے ہیں؟", faq2A: "تمام سات امارات: دبئی، ابوظہبی، شارجہ، عجمان، راس الخیمہ، فجیرہ، ام القوین۔",
    faq3Q: "کیا آپ میرے آن لائن اسٹور کے ساتھ انٹیگریٹ ہیں؟", faq3A: "جی ہاں، آن لائن محکمہ کے ذریعے API انٹیگریشن کے ذریعے۔",
    faq4Q: "میں شکایت کیسے درج کروں؟", faq4A: "موضوع میں \"شکایت\" لکھ کر رابطہ فارم استعمال کریں، یا سپورٹ لائن پر کال کریں۔",
    contactFormTitle: "پیغام بھیجیں", formName: "پورا نام", formEmail: "ای میل", formPhone: "فون (اختیاری)", formDept: "محکمہ",
    formDeptPartnership: "شراکت داری", formDeptBulk: "بلک پارسلز", formDeptOnline: "آن لائن", formDeptGeneral: "عمومی",
    formSubject: "موضوع", formMessage: "پیغام", formSubmit: "پیغام بھیجیں", formSuccess: "✅ پیغام بھیج دیا گیا! ہم ایک کاروباری گھنٹے میں جواب دیں گے۔",
    portalsTitle: "کسٹمر اور ڈرائیور پورٹلز", portalsSub: "مظاہرے کے لیے فرضی ڈیش بورڈز۔",
    customerPortalBtn: "کسٹمر پورٹل", driverPortalBtn: "ڈرائیور پورٹل",
    dashMenu: "مینو", dashOverview: "جائزہ", dashOrders: "آرڈر مینجمنٹ", dashPayments: "ادائیگیاں اور تاریخ", dashProfile: "پروفائل",
    kpiActive: "فعال آرڈرز", kpiDelivered: "ڈیلیور شدہ", kpiSpent: "اس ماہ",
    recentOrders: "حالیہ آرڈرز", tableId: "شناخت", tableDate: "تاریخ", tableStatus: "حیثیت", tableService: "سروس",
    statusDelivered: "ڈیلیور شدہ", statusTransit: "ٹرانزٹ میں", statusPending: "زیر التواء",
    dashToday: "آج کے اسائنمنٹس", dashRoute: "روٹ کا نظارہ", dashEarnings: "کمائی", dashHistoryDriver: "تاریخ",
    kpiAssigned: "آج تفویض شدہ", kpiCompleted: "اس ہفتے مکمل", kpiEarnings: "کمائی",
    assignedOrders: "تفویض شدہ آرڈرز", tableAddress: "پتہ", tableAction: "کارروائی", acceptBtn: "قبول کریں", deliveredBtn: "ڈیلیور شدہ نشان زد کریں",
    footerCompany: "کمپنی", footerContact: "رابطہ", footerCoverage: "کوریج", footerFollow: "ہمیں فالو کریں", footerLegal: "قانونی",
    privacyPolicy: "رازداری کی پالیسی", termsOfService: "شرائط و ضوابط", allRights: "جملہ حقوق محفوظ ہیں۔", sloganFooter: "ہر میل پر اعتبار پہنچانا۔",
    privacyTitle: "رازداری کی پالیسی",
    privacyBody: `<p>آخری تازہ کاری: نومبر 2026</p><p>السويدي ڈیلیوری سروسز میں، ہم آپ کی رازداری کے تحفظ کے لیے پرعزم ہیں۔ یہ رازداری کی پالیسی بتاتی ہے کہ ہم آپ کی معلومات کیسے جمع، استعمال اور محفوظ کرتے ہیں۔</p>
    <h3>1. ہم کون سی معلومات جمع کرتے ہیں</h3><p>ہم وہ معلومات جمع کرتے ہیں جو آپ ہمیں براہ راست فراہم کرتے ہیں، جیسے آپ کا نام، ای میل، فون نمبر، ڈیلیوری کا پتہ، اور ادائیگی کی معلومات۔</p>
    <h3>2. ہم آپ کی معلومات کیسے استعمال کرتے ہیں</h3><p>ہم آپ کی معلومات آپ کی ڈیلیوری کی درخواستوں کو پورا کرنے، آپ سے رابطہ کرنے، اور ادائیگیوں پر کارروائی کرنے کے لیے استعمال کرتے ہیں۔</p>
    <h3>3. معلومات کا اشتراک</h3><p>ہم صرف ڈیلیوری مکمل کرنے کے مقصد سے تھرڈ پارٹی سروس فراہم کنندگان کے ساتھ معلومات کا اشتراک کر سکتے ہیں۔ ہم آپ کا ڈیٹا فروخت نہیں کرتے۔</p>
    <h3>4. ڈیٹا کی حفاظت</h3><p>ہم آپ کی ذاتی معلومات کو غیر مجاز رسائی سے بچانے کے لیے مناسب حفاظتی اقدامات کرتے ہیں۔</p>
    <h3>5. ہم سے رابطہ کریں</h3><p>اگر اس پالیسی کے بارے میں کوئی سوال ہے، تو alswaididelivery@gmail.com پر رابطہ کریں۔</p>`,
    termsTitle: "شرائط و ضوابط",
    termsBody: `<p>آخری تازہ کاری: نومبر 2026</p><p>السويدي ڈیلیوری سروسز میں خوش آمدید۔ ہماری خدمات استعمال کر کے، آپ ان شرائط و ضوابط سے اتفاق کرتے ہیں۔</p>
    <h3>1. خدمات</h3><p>ہم متحدہ عرب امارات کے اندر ڈیلیوری اور لاجسٹک خدمات فراہم کرتے ہیں، بشمول کھانا، فارمیسی، پھول، چاکلیٹ، بلک پارسلز، اور ریستوران کی نقل و حمل۔</p>
    <h3>2. صارف کی ذمہ داریاں</h3><p>آپ پک اپ اور ڈیلیوری کے مقامات، پیکیج کے مواد، اور رابطے کی تفصیلات کے بارے میں درست معلومات فراہم کرنے پر متفق ہیں۔ آپ غیر قانونی اشیاء کے لیے خدمات استعمال نہیں کریں گے۔</p>
    <h3>3. قیمتوں کا تعین اور ادائیگی</h3><p>قیمتوں میں تبدیلی ہو سکتی ہے۔ بکنگ کے وقت ادائیگی مکمل کرنی ہوگی جب تک کہ تحریری طور پر اتفاق نہ ہو۔</p>
    <h3>4. ذمہ داری کی حد</h3><p>السويدي ڈیلیوری سروسز بالواسطہ یا حادثاتی نقصانات کے لیے ذمہ دار نہیں ہے۔</p>
    <h3>5. قابل اطلاق قانون</h3><p>یہ شرائط متحدہ عرب امارات کے قوانین کے تحت چلتی ہیں۔</p>`
  }
};

/* ============================================================
   2. STATE & UTILITIES
============================================================ */
let currentLang = 'en';
let currentPage = 'home';

function t(key) {
  return translations[currentLang]?.[key] ?? translations.en[key] ?? key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
  
  // Inject long-form HTML bodies dynamically
  if (currentPage === 'about') {
    document.querySelector('#page-about .about-text').innerHTML = t('aboutBody');
  } else if (currentPage === 'privacy') {
    document.querySelector('#page-privacy .about-text').innerHTML = t('privacyBody');
  } else if (currentPage === 'terms') {
    document.querySelector('#page-terms .about-text').innerHTML = t('termsBody');
  }
}

function setLanguage(lang) {
  currentLang = lang;
  const isRTL = (lang === 'ar' || lang === 'ur');
  
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.body.setAttribute('data-lang', lang);
  
  applyTranslations();
  document.getElementById('langSelect').value = lang;
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  
  document.querySelectorAll('#mainNav button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === page);
  });

  // Close mobile menu on selection
  document.getElementById('mainNav').classList.remove('active');
  
  // Inject long form content on navigation
  if (page === 'about') {
    document.querySelector('#page-about .about-text').innerHTML = t('aboutBody');
  } else if (page === 'privacy') {
    document.querySelector('#page-privacy .about-text').innerHTML = t('privacyBody');
  } else if (page === 'terms') {
    document.querySelector('#page-terms .about-text').innerHTML = t('termsBody');
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bookDelivery() {
  window.open('https://deliveryforless.vercel.app', '_blank');
}

function showPortal(type) {
  document.getElementById('portal-customer').style.display = type === 'customer' ? 'grid' : 'none';
  document.getElementById('portal-driver').style.display = type === 'driver' ? 'grid' : 'none';
  document.querySelectorAll('.portal-tabs .btn-outline').forEach((btn, i) => {
    btn.classList.toggle('btn-primary', (i === 0 && type === 'customer') || (i === 1 && type === 'driver'));
  });
}

function handleContact(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.style.display = 'block';
  status.textContent = t('formSuccess');
  e.target.reset();
  setTimeout(() => { status.style.display = 'none'; }, 5000);
}

/* ============================================================
   3. INITIALISATION
============================================================ */
function openMapModal(orderId, pickup, dropoff) {
  document.getElementById("modalOrderId").textContent = "#" + orderId;
  document.getElementById("modalPickup").textContent = pickup;
  document.getElementById("modalDropoff").textContent = dropoff;
  document.getElementById("mapModal").classList.add("active");
}

function closeMapModal() {
  document.getElementById("mapModal").classList.remove("active");
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  setLanguage('en');

  document.querySelectorAll('#mainNav button').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page));
  });

  // Mobile Hamburger Toggle
  document.getElementById('hamburgerBtn').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('active');
  });

  document.getElementById('langSelect').addEventListener('change', (e) => setLanguage(e.target.value));

  document.getElementById('themeToggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  // Initialize About page content on load
  document.querySelector('#page-about .about-text').innerHTML = t('aboutBody');
});

// Modal Logic for Driver Dashboard
function openMapModal(orderId, pickup, dropoff) {
  document.getElementById('modalOrderId').textContent = '#' + orderId;
  document.getElementById('modalPickup').textContent = pickup;
  document.getElementById('modalDropoff').textContent = dropoff;
  document.getElementById('mapModal').classList.add('active');
}

function closeMapModal() {
  document.getElementById('mapModal').classList.remove('active');
}
