export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (GA_MEASUREMENT_ID && window?.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

type EventNames =
  | 'add_payment_info'
  | 'add_to_cart'
  | 'add_to_wishlist'
  | 'begin_checkout'
  | 'checkout_progress'
  | 'exception'
  | 'generate_lead'
  | 'login'
  | 'page_view'
  | 'purchase'
  | 'refund'
  | 'remove_from_cart'
  | 'screen_view'
  | 'search'
  | 'select_content'
  | 'set_checkout_option'
  | 'share'
  | 'sign_up'
  | 'timing_complete'
  | 'view_item'
  | 'view_item_list'
  | 'view_promotion'
  | 'view_search_results';

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const sendEvent = (eventName: EventNames, data: Record<string, any>) => {
  if (GA_MEASUREMENT_ID && window?.gtag) {
    window.gtag('event', eventName, data);
  }
};
