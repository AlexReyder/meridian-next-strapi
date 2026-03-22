# Home page specific components

Этот patch добавляет page-specific блоки для Home:
- HeroHome
- ValueHome
- DeliverablesHome
- WhyHome
- AudienceHome
- ConceptsHome
- MethodHome
- PricingHome
- ProposalHome
- SamplePreviewHome
- TrustHome
- FaqHome
- FinalCtaHome

Что сделать после применения:
1. Перезапустить Strapi.
2. Один раз запустить seed с:
   - CMS_SEED_ON_BOOT=true
   - CMS_SEED_OVERWRITE=true
   - CMS_SEED_LOCALES=ru,en,ar
3. Проверить страницу home на /ru, /en, /ar.

Замечания:
- Верстка и классы блоков сохранены по мотивам текущей Home-страницы и AR-версии из присланного архива.
- Для максимальной редактируемости изображения заведены как URL-строки, а не media fields.
- EN/AR seed — стартовый и редактируемый из Strapi.
