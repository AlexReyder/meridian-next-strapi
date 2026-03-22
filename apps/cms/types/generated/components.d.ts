import type { Schema, Struct } from '@strapi/strapi';

export interface NavigationFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_navigation_footer_columns';
  info: {
    displayName: 'Footer Column';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'navigation.menu-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    displayName: 'Menu Item';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface PageAudienceHome extends Struct.ComponentSchema {
  collectionName: 'components_page_audience_home';
  info: {
    description: 'Home page specific section';
    displayName: 'AudienceHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageCardItem extends Struct.ComponentSchema {
  collectionName: 'components_page_card_items';
  info: {
    displayName: 'Card Item';
    icon: 'apps';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageCardsGrid extends Struct.ComponentSchema {
  collectionName: 'components_page_cards_grids';
  info: {
    displayName: 'Cards Grid';
    icon: 'grid';
  };
  attributes: {
    columns: Schema.Attribute.Enumeration<['2', '3', '4']> &
      Schema.Attribute.DefaultTo<'3'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    items: Schema.Attribute.Component<'page.card-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionId: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    variant: Schema.Attribute.Enumeration<
      [
        'default',
        'outcomes',
        'deliverables',
        'pillars',
        'audience',
        'concepts',
        'pricing',
        'solutions-grid',
        'artifacts',
        'situations',
        'efficiency',
        'projects',
        'packages',
        'conversion-paths',
        'decision-support',
        'trust',
      ]
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface PageConceptDetail extends Struct.ComponentSchema {
  collectionName: 'components_page_concept_details';
  info: {
    displayName: 'Concept Detail';
    icon: 'apps';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    value: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageConceptNav extends Struct.ComponentSchema {
  collectionName: 'components_page_concept_navs';
  info: {
    displayName: 'Concept Nav';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'page.concept-nav-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageConceptNavItem extends Struct.ComponentSchema {
  collectionName: 'components_page_concept_nav_items';
  info: {
    displayName: 'Concept Nav Item';
    icon: 'bulletList';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageConceptSection extends Struct.ComponentSchema {
  collectionName: 'components_page_concept_sections';
  info: {
    displayName: 'Concept Section';
    icon: 'landscape';
  };
  attributes: {
    categoryLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    details: Schema.Attribute.Component<'page.concept-detail', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Schema.Attribute.Media<'images'>;
    intro: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    layout: Schema.Attribute.Enumeration<['imageLeft', 'imageRight']> &
      Schema.Attribute.DefaultTo<'imageLeft'>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageConceptsHome extends Struct.ComponentSchema {
  collectionName: 'components_page_concepts_home';
  info: {
    description: 'Home page specific section';
    displayName: 'ConceptsHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageCta extends Struct.ComponentSchema {
  collectionName: 'components_page_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    secondaryButtonHref: Schema.Attribute.String;
    secondaryButtonLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    sectionId: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageDeliverablesHome extends Struct.ComponentSchema {
  collectionName: 'components_page_deliverables_home';
  info: {
    description: 'Home page specific section';
    displayName: 'DeliverablesHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageFaq extends Struct.ComponentSchema {
  collectionName: 'components_page_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    items: Schema.Attribute.Component<'page.faq-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageFaqHome extends Struct.ComponentSchema {
  collectionName: 'components_page_faq_home';
  info: {
    description: 'Home page specific section';
    displayName: 'FaqHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_page_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    question: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageFinalCtaHome extends Struct.ComponentSchema {
  collectionName: 'components_page_final_cta_home';
  info: {
    description: 'Home page specific section';
    displayName: 'FinalCtaHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageFormSection extends Struct.ComponentSchema {
  collectionName: 'components_page_form_sections';
  info: {
    displayName: 'Form Section';
    icon: 'mail';
  };
  attributes: {
    acceptsFiles: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    maxFileSizeMb: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<50>;
    sectionId: Schema.Attribute.String;
    submitLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    successMessage: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageHero extends Struct.ComponentSchema {
  collectionName: 'components_page_heroes';
  info: {
    displayName: 'Hero';
    icon: 'landscape';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    primaryImage: Schema.Attribute.Media<'images'>;
    primaryImageLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    secondaryImage: Schema.Attribute.Media<'images'>;
    secondaryImageLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    sectionId: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'page.hero-tag', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageHeroHome extends Struct.ComponentSchema {
  collectionName: 'components_page_hero_home';
  info: {
    description: 'Home page specific section';
    displayName: 'HeroHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageHeroTag extends Struct.ComponentSchema {
  collectionName: 'components_page_hero_tags';
  info: {
    displayName: 'Hero Tag';
    icon: 'priceTag';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageHomeArtifactItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_artifact_items';
  info: {
    displayName: 'Home Artifact Item';
  };
  attributes: {
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHomeAudienceItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_audience_items';
  info: {
    displayName: 'Home Audience Item';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    problem: Schema.Attribute.Text;
    problemLabel: Schema.Attribute.String;
    result: Schema.Attribute.Text;
    resultLabel: Schema.Attribute.String;
    solution: Schema.Attribute.Text;
    solutionLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHomeConceptItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_concept_items';
  info: {
    displayName: 'Home Concept Item';
  };
  attributes: {
    badge: Schema.Attribute.String;
    challenge: Schema.Attribute.Text;
    challengeLabel: Schema.Attribute.String;
    delivered: Schema.Attribute.Text;
    deliveredLabel: Schema.Attribute.String;
    imageAlt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    structured: Schema.Attribute.Text;
    structuredLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHomeDeliverableItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_deliverable_items';
  info: {
    displayName: 'Home Deliverable Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      [
        'file-text',
        'users',
        'git-branch',
        'layout-grid',
        'palette',
        'mouse-pointer',
        'layers',
        'file-check',
      ]
    > &
      Schema.Attribute.DefaultTo<'file-text'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHomeFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_faq_items';
  info: {
    displayName: 'Home FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHomeMethodStepItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_method_step_items';
  info: {
    displayName: 'Home Method Step Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.JSON;
    number: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHomeOutcomeItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_outcome_items';
  info: {
    displayName: 'Home Outcome Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<['trending-up', 'trophy', 'code']> &
      Schema.Attribute.DefaultTo<'code'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryLabel: Schema.Attribute.String;
  };
}

export interface PageHomePillarItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_pillar_items';
  info: {
    displayName: 'Home Pillar Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHomePricingPackageItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_pricing_package_items';
  info: {
    displayName: 'Home Pricing Package Item';
  };
  attributes: {
    badge: Schema.Attribute.String;
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    includes: Schema.Attribute.JSON;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String;
    timeline: Schema.Attribute.String;
  };
}

export interface PageHomeProposalStepItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_proposal_step_items';
  info: {
    displayName: 'Home Proposal Step Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<['file-text', 'mail', 'check-circle']> &
      Schema.Attribute.DefaultTo<'file-text'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHomeTagItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_tag_items';
  info: {
    displayName: 'Home Tag Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHomeTrustItem extends Struct.ComponentSchema {
  collectionName: 'components_page_home_trust_items';
  info: {
    displayName: 'Home Trust Item';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageMediaText extends Struct.ComponentSchema {
  collectionName: 'components_page_media_texts';
  info: {
    displayName: 'Media + Text';
    icon: 'picture';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    mediaPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageMethodHome extends Struct.ComponentSchema {
  collectionName: 'components_page_method_home';
  info: {
    description: 'Home page specific section';
    displayName: 'MethodHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PagePricingHome extends Struct.ComponentSchema {
  collectionName: 'components_page_pricing_home';
  info: {
    description: 'Home page specific section';
    displayName: 'PricingHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageProposalHome extends Struct.ComponentSchema {
  collectionName: 'components_page_proposal_home';
  info: {
    description: 'Home page specific section';
    displayName: 'ProposalHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageRichText extends Struct.ComponentSchema {
  collectionName: 'components_page_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'feather';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageSamplePreviewHome extends Struct.ComponentSchema {
  collectionName: 'components_page_sample_preview_home';
  info: {
    description: 'Home page specific section';
    displayName: 'SamplePreviewHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageStatementsStrip extends Struct.ComponentSchema {
  collectionName: 'components_page_statements_strips';
  info: {
    displayName: 'Statements Strip';
    icon: 'dashboard';
  };
  attributes: {
    items: Schema.Attribute.Component<'page.text-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageStepItem extends Struct.ComponentSchema {
  collectionName: 'components_page_step_items';
  info: {
    displayName: 'Step Item';
    icon: 'numberedList';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    details: Schema.Attribute.JSON;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageSteps extends Struct.ComponentSchema {
  collectionName: 'components_page_steps';
  info: {
    displayName: 'Steps';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    items: Schema.Attribute.Component<'page.step-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    variant: Schema.Attribute.Enumeration<
      ['process', 'proposal', 'method', 'checklist']
    > &
      Schema.Attribute.DefaultTo<'process'>;
  };
}

export interface PageTextItem extends Struct.ComponentSchema {
  collectionName: 'components_page_text_items';
  info: {
    displayName: 'Text Item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PageTrustHome extends Struct.ComponentSchema {
  collectionName: 'components_page_trust_home';
  info: {
    description: 'Home page specific section';
    displayName: 'TrustHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageValueHome extends Struct.ComponentSchema {
  collectionName: 'components_page_value_home';
  info: {
    description: 'Home page specific section';
    displayName: 'ValueHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_page_video_sections';
  info: {
    displayName: 'Video Section';
    icon: 'play';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    highlights: Schema.Attribute.Component<'page.text-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    note: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    posterImage: Schema.Attribute.Media<'images'>;
    primaryCtaHref: Schema.Attribute.String;
    primaryCtaLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    videoUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageWhyHome extends Struct.ComponentSchema {
  collectionName: 'components_page_why_home';
  info: {
    description: 'Home page specific section';
    displayName: 'WhyHome';
  };
  attributes: {
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navigation.footer-column': NavigationFooterColumn;
      'navigation.menu-item': NavigationMenuItem;
      'page.audience-home': PageAudienceHome;
      'page.card-item': PageCardItem;
      'page.cards-grid': PageCardsGrid;
      'page.concept-detail': PageConceptDetail;
      'page.concept-nav': PageConceptNav;
      'page.concept-nav-item': PageConceptNavItem;
      'page.concept-section': PageConceptSection;
      'page.concepts-home': PageConceptsHome;
      'page.cta': PageCta;
      'page.deliverables-home': PageDeliverablesHome;
      'page.faq': PageFaq;
      'page.faq-home': PageFaqHome;
      'page.faq-item': PageFaqItem;
      'page.final-cta-home': PageFinalCtaHome;
      'page.form-section': PageFormSection;
      'page.hero': PageHero;
      'page.hero-home': PageHeroHome;
      'page.hero-tag': PageHeroTag;
      'page.home-artifact-item': PageHomeArtifactItem;
      'page.home-audience-item': PageHomeAudienceItem;
      'page.home-concept-item': PageHomeConceptItem;
      'page.home-deliverable-item': PageHomeDeliverableItem;
      'page.home-faq-item': PageHomeFaqItem;
      'page.home-method-step-item': PageHomeMethodStepItem;
      'page.home-outcome-item': PageHomeOutcomeItem;
      'page.home-pillar-item': PageHomePillarItem;
      'page.home-pricing-package-item': PageHomePricingPackageItem;
      'page.home-proposal-step-item': PageHomeProposalStepItem;
      'page.home-tag-item': PageHomeTagItem;
      'page.home-trust-item': PageHomeTrustItem;
      'page.media-text': PageMediaText;
      'page.method-home': PageMethodHome;
      'page.pricing-home': PagePricingHome;
      'page.proposal-home': PageProposalHome;
      'page.rich-text': PageRichText;
      'page.sample-preview-home': PageSamplePreviewHome;
      'page.statements-strip': PageStatementsStrip;
      'page.step-item': PageStepItem;
      'page.steps': PageSteps;
      'page.text-item': PageTextItem;
      'page.trust-home': PageTrustHome;
      'page.value-home': PageValueHome;
      'page.video-section': PageVideoSection;
      'page.why-home': PageWhyHome;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
