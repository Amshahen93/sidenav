export const navbar = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      path: ['dashboard'],
    }, {
      name: 'CMS',
      icon: 'how_to_vote',
      role: '',
      subManue: [{
        name: 'Notifications',
        icon: 'notifications_none',
        role: '',
        path: ['cms', 'notifications']
      }, {
        name: 'Main filters',
        icon: 'opacity',
        role: '',
        path: ['cms', 'main-filters']
      }, {
        name: 'Reviews',
        icon: 'sms_failed',
        role: '',
        path: ['cms', 'reviews']
      }, {
        name: 'Translations',
        icon: 'g_translate',
        role: '',
        path: ['cms', 'translations']
      }, {
        name: 'Navigation bar',
        icon: 'view_day',
        role: '',
        path: ['cms', 'navigationBar']
      }, {
        name: 'Mobile Menu',
        icon: 'subject',
        role: '',
        path: ['cms', 'mobile-menu']
      }, {
        name: 'Banner',
        icon: 'picture_in_picture_alt',
        role: '',
        path: ['cms', 'banner']
      }, {
        name: 'Search Settings',
        icon: 'settings_ethernet',
        role: '',
        path: ['cms', 'search-settings']
      }],
      subMenuIsOpen: false
    }, {
      name: 'Partner',
      icon: 'ballot',
      role: '',
      subManue: [{
        name: 'Partner list',
        icon: 'store',
        role: '',
        path: ['partner', 'list']
      }, {
        name: 'Manu',
        icon: 'restaurant',
        role: '',
        path: ['partner', 'menus']
      }, {
        name: 'Product',
        icon: 'local_pizza',
        role: '',
        popup: 'Product'
      }, {
        name: 'Legal Entities',
        icon: 'assignment_ind',
        role: '',
        popup: 'Legal Entities'
      }, {
        name: 'Partner Category',
        icon: 'style',
        role: '',
        popup: 'Partner Category'
      }, {
        name: 'Service Type',
        icon: 'room_service',
        role: '',
        popup: 'Service Type'
      }, {
        name: 'Service Category',
        icon: 'category',
        role: '',
        popup: 'Service Category'
      }, {
        name: 'Commission Category',
        icon: 'widgets',
        role: '',
        popup: 'Commission Category'
      }, {
        name: 'Section List',
        icon: 'fastfood',
        role: '',
        path: ['partner', 'section-list']
      }, {
        name: 'Section Category',
        icon: 'view_comfy',
        role: '',
        popup: 'Section Category'
      }],
      subMenuIsOpen: false
    }, {
      name: 'Product List Modal',
      icon: 'local_pizza',
      role: ''
    }, {
      name: 'Campaign Management',
      icon: 'cake',
      role: '',
      subManue: [{
        name: 'Campaign',
        icon: 'toys',
        role: '',
        path: ['campaign-management', 'campaign']
      }, {
        name: 'Gifts Inventory',
        icon: 'card_giftcard',
        role: '',
        path: ['campaign-management', 'giftsInventory']
      }],
      subMenuIsOpen: false
    }, {
      name: 'Logistics Management',
      icon: 'departure_board',
      role: null
    }, {
      name: 'Couriers Dispatch Management',
      icon: 'directions_car',
      role: null
    }, {
      name: 'Customer Support',
      icon: 'headset_mic',
      role: null
    }, {
      name: 'Reporting',
      icon: 'assessment',
      role: null
    }, {
      name: 'User Management',
      icon: 'perm_identity',
      path: ['user-management'],
      role: null
    }, {
      name: 'Zone',
      icon: 'place',
      path: ['zone'],
      role: null
    }, {
      name: 'Company Management',
      icon: 'business_center',
      role: null,
    }, {
      name: 'Finance Management',
      icon: 'monetization_on',
      role: null
    }, {
      name: 'Inventory Management',
      icon: 'business',
      role: null,
      subManue: [{
        name: 'Inventory Management',
        icon: 'view_module',
        role: '',
        path: ['inventory', 'management']
      }, {
        name: 'Create Item Type',
        icon: 'all_out',
        role: '',
        popup: 'Create Item Type'
      }, {
        name: 'Create Location',
        icon: 'business',
        role: '',
        popup: 'Create Location'
      }, {
        name: 'Movements',
        icon: 'sync',
        role: '',
        path: ['inventory', 'movements']
      }, {
        name: 'Adjustment List',
        icon: 'healing',
        role: '',
        path: ['inventory', 'adjustment-list']
      }],
      subMenuIsOpen: false
    }, {
      name: 'Settings',
      icon: 'settings',
      role: null,
      subManue: [{
        name: 'Country',
        icon: 'public',
        role: '',
        path: ['settings', 'country']
      }, {
        name: 'Backup',
        icon: 'backup',
        role: '',
        path: ['settings', 'backup']
      }, {
        name: 'Order Type',
        icon: 'receipt',
        role: '',
        path: ['settings', 'order-type']
      }, {
        name: 'Flow Settings',
        icon: '360',
        role: '',
        path: ['settings', 'flow-settings']
      }, {
        name: 'Delivery Settings',
        icon: 'motorcycle',
        role: '',
        path: ['settings', 'delivery']
      }],
      subMenuIsOpen: false
    },
  ];
