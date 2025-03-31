export type Layout = {
  logo: string;
  headerLinks: Array<{
    text: string;
    url: string;
  }>;
  footerLinks: Array<{
    text: string;
    url: string;
  }>;
  socialMediaButtons: Array<{
    platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin';
    url: string;
  }>;
};
