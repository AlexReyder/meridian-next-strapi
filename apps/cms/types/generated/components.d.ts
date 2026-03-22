import type { Schema, Struct } from '@strapi/strapi';

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
      ]
    > &
      Schema.Attribute.DefaultTo<'default'>;
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
    variant: Schema.Attribute.Enumeration<['process', 'proposal']> &
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
      'navigation.menu-item': NavigationMenuItem;
      'page.card-item': PageCardItem;
      'page.cards-grid': PageCardsGrid;
      'page.cta': PageCta;
      'page.faq': PageFaq;
      'page.faq-item': PageFaqItem;
      'page.form-section': PageFormSection;
      'page.hero': PageHero;
      'page.hero-tag': PageHeroTag;
      'page.media-text': PageMediaText;
      'page.rich-text': PageRichText;
      'page.statements-strip': PageStatementsStrip;
      'page.step-item': PageStepItem;
      'page.steps': PageSteps;
      'page.text-item': PageTextItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
