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
  collectionName: 'components_page_audience_homes';
  info: {
    displayName: 'AudienceHome';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'page.home-audience-item', true>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface PageConceptsHome extends Struct.ComponentSchema {
  collectionName: 'components_page_concepts_homes';
  info: {
    displayName: 'ConceptsHome';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'page.home-concept-item', true>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageDeliverablesHome extends Struct.ComponentSchema {
  collectionName: 'components_page_deliverables_homes';
  info: {
    displayName: 'DeliverablesHome';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'page.home-deliverable-item', true>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageFaqHome extends Struct.ComponentSchema {
  collectionName: 'components_page_faq_homes';
  info: {
    displayName: 'FaqHome';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'page.home-faq-item', true>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
  collectionName: 'components_page_final_cta_homes';
  info: {
    displayName: 'FinalCtaHome';
  };
  attributes: {
    description: Schema.Attribute.Text;
    footnote: Schema.Attribute.String;
    primaryButtonHref: Schema.Attribute.String;
    primaryButtonLabel: Schema.Attribute.String;
    secondaryButtonHref: Schema.Attribute.String;
    secondaryButtonLabel: Schema.Attribute.String;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageHeroHome extends Struct.ComponentSchema {
  collectionName: 'components_page_hero_home';
  info: {
    description: 'Home page specific hero section with editable content and media';
    displayName: 'HeroHome';
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
    isEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    primaryCtaHref: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    primaryCtaLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    primaryImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    primaryImageAlt: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    primaryImageLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    secondaryCtaHref: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    secondaryCtaLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    secondaryImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    secondaryImageAlt: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    secondaryImageLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    sectionId: Schema.Attribute.String;
    supportingText: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tags: Schema.Attribute.Component<'page.hero-tag', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    titleHtml: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
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

export interface PageMethodHome extends Struct.ComponentSchema {
  collectionName: 'components_page_method_homes';
  info: {
    displayName: 'MethodHome';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'page.home-method-step-item', true>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PagePricingHome extends Struct.ComponentSchema {
  collectionName: 'components_page_pricing_homes';
  info: {
    displayName: 'PricingHome';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'page.home-pricing-package-item', true>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageProposalHome extends Struct.ComponentSchema {
  collectionName: 'components_page_proposal_homes';
  info: {
    displayName: 'ProposalHome';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'page.home-proposal-step-item', true>;
    note: Schema.Attribute.String;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageSamplePreviewHome extends Struct.ComponentSchema {
  collectionName: 'components_page_sample_preview_homes';
  info: {
    displayName: 'SamplePreviewHome';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'page.home-artifact-item', true>;
    note: Schema.Attribute.Text;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
  collectionName: 'components_page_trust_homes';
  info: {
    displayName: 'TrustHome';
  };
  attributes: {
    items: Schema.Attribute.Component<'page.home-trust-item', true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface PageValueHome extends Struct.ComponentSchema {
  collectionName: 'components_page_value_homes';
  info: {
    displayName: 'ValueHome';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'page.home-outcome-item', true>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageWhyHome extends Struct.ComponentSchema {
  collectionName: 'components_page_why_homes';
  info: {
    displayName: 'WhyHome';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'page.home-pillar-item', true>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
      'page.concept-detail': PageConceptDetail;
      'page.concept-nav-item': PageConceptNavItem;
      'page.concepts-home': PageConceptsHome;
      'page.deliverables-home': PageDeliverablesHome;
      'page.faq-home': PageFaqHome;
      'page.faq-item': PageFaqItem;
      'page.final-cta-home': PageFinalCtaHome;
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
      'page.method-home': PageMethodHome;
      'page.pricing-home': PagePricingHome;
      'page.proposal-home': PageProposalHome;
      'page.sample-preview-home': PageSamplePreviewHome;
      'page.step-item': PageStepItem;
      'page.text-item': PageTextItem;
      'page.trust-home': PageTrustHome;
      'page.value-home': PageValueHome;
      'page.why-home': PageWhyHome;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
