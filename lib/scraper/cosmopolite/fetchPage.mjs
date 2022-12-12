import fetch from 'node-fetch';

const url =
  'https://cosmopolite.no/views/ajax?_wrapper_format=drupal_ajax';

const staticRawParams = [
  'view_name=events',
  'view_display_id=page_1',
  'view_args=',
  'view_path=%2Fprogram',
  'view_base_path=program',
  'view_dom_id=4bafb63bddd2cff8927fbcdcfe1c6f29bb4c786f073fec6049f78cd5bd24f704',
  'pager_element=0',
  '_drupal_ajax=1',
  'ajax_page_state%5Btheme%5D=cosmo',
  'ajax_page_state%5Btheme_token%5D=',
  'ajax_page_state%5Blibraries%5D=better_exposed_filters%2Fauto_submit%2Cbetter_exposed_filters%2Fgeneral%2Cbetter_exposed_filters%2Fselect_all_none%2Cblazy%2Fbio.ajax%2Ccore%2Finternal.jquery.form%2Ccosmo%2Fglobal%2Cextlink%2Fdrupal.extlink%2Cgoogle_analytics%2Fgoogle_analytics%2Csystem%2Fbase%2Cviews%2Fviews.ajax%2Cviews%2Fviews.module%2Cviews_infinite_scroll%2Fviews-infinite-scroll%2Czurb_foundation%2Fglobal',
];

const getPageParam = (page) => `page=${page}`;

const getParams = (page) =>
  [...staticRawParams, getPageParam(page)].join('&');

export const fetchPage = (page) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      charset: 'UTF-8',
    },
    body: getParams(page),
  });
