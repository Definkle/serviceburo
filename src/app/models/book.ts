export interface Book {
  id: string;
  type: string;
  links: Links;
  attributes: BookAttributes;
  relationships: {
    authors: {
      links: Links;
    };
    publishers: {
      links: Links;
    };
  };
}

export interface Links {
  self: string;
  related?: string;
}

export interface BookAttributes {
  urn: string;
  created_at: string;
  updated_at: string;
  content: string;
  properties: null;
  display_properties: {
    type: string;
    image: string;
  };
}

export interface BookData {
  id: string;
  name: string;
  coverType: string;
  cover: string;
  createdAt: string;
  updatedAt: string;
}
