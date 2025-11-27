import React from "react";
import ReactDOM from "react-dom/client";

/**
 * - Header
 *    - logo
 *    - links
 * - Body
 *    - search
 *    - Restaurant cards
 */

const appLogoUrl =
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/fooba-by-wanwan-designcrowd.jpg";
 
const kfcLogoUrl =  "https://upload.wikimedia.org/wikipedia/en/5/57/KFC_logo-image.svg"; 
const dominosLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg";

const imageBaseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

const restList = [
    {
      info: {
        id: "831065",
        name: "Chinese Wok",
        cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
        locality: "Chandni Chowk",
        areaName: "Omaxe mall",
        costForTwo: "₹250 for two",
        cuisines: [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        avgRating: 4.1,
        parentId: "61955",
        avgRatingString: "4.1",
        totalRatingsString: "511",
        sla: {
          deliveryTime: 39,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:00:00",
          opened: true
        },
        badges: {
          
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹119"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/chinese-wok-chandni-chowk-omaxe-mall-rest831065",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "804071",
        name: "Pizza Hut",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/3f97b7b6-cc16-4497-9522-b6d20b143c65_804071.JPG",
        locality: "Chandni Chowk",
        areaName: "Chandni Chowk",
        costForTwo: "₹350 for two",
        cuisines: [
          "Pizzas"
        ],
        avgRating: 4.2,
        parentId: "721",
        avgRatingString: "4.2",
        totalRatingsString: "435",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:00:00",
          opened: true
        },
        badges: {
          
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "4.8",
            ratingCount: "122"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/pizza-hut-chandni-chowk-rest804071",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "807783",
        name: "Burger King",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/a049117e-1a3d-4ca0-94a0-9e25a17879df_807783.jpg",
        locality: "Omaxe Mall",
        areaName: "Chandni Chowk",
        costForTwo: "₹350 for two",
        cuisines: [
          "Burgers",
          "American"
        ],
        avgRating: 4.3,
        parentId: "166",
        avgRatingString: "4.3",
        totalRatingsString: "873",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "35-45 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:59:00",
          opened: true
        },
        badges: {
          
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹19"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/burger-king-omaxe-mall-chandni-chowk-rest807783",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "740647",
        name: "Theobroma",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/27/e7550b48-6220-45ad-a388-a5a01375325f_740647.JPG",
        locality: "Kamla Nagar",
        areaName: "Kamla Nagar",
        costForTwo: "₹400 for two",
        cuisines: [
          "Bakery",
          "Desserts"
        ],
        avgRating: 4.6,
        parentId: "1040",
        avgRatingString: "4.6",
        totalRatingsString: "1.2K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-28 01:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Desserts.png",
              description: "Delivery!"
            },
            {
              imageId: "newg.png",
              description: "Gourmet"
            }
          ]
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {
          
        },
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Desserts.png"
                  }
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "133"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/theobroma-kamla-nagar-rest740647",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "804724",
        name: "KFC",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/0940cd0b-70ed-4b14-a50e-65a7160ccc5a_804724.JPG",
        locality: "Kaccha Bagh",
        areaName: "Chandni Chowk",
        costForTwo: "₹400 for two",
        cuisines: [
          "Burgers",
          "Rolls & Wraps",
          "Fast Food"
        ],
        avgRating: 4.3,
        parentId: "547",
        avgRatingString: "4.3",
        totalRatingsString: "138",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:59:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!"
            },
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "android/static-assets/icons/big_rx.png"
                  }
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/kfc-kaccha-bagh-chandni-chowk-rest804724",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "76225",
        name: "Subway",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/6f809a63-f3b1-46a0-b0d3-6b8903772c82_76225.jpg",
        locality: "Malka Ganj Road",
        areaName: "Kamla Nagar",
        costForTwo: "₹350 for two",
        cuisines: [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        avgRating: 4.2,
        parentId: "2",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:59:00",
          opened: true
        },
        badges: {
          
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹119"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/subway-malka-ganj-road-kamla-nagar-rest76225",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "526516",
        name: "Salad Days",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/14/da84a0d0-52b6-4349-98cf-188f86e6a403_526516.jpg",
        locality: "Gole Market",
        areaName: "Gole Market",
        costForTwo: "₹600 for two",
        cuisines: [
          "Salads"
        ],
        avgRating: 4.6,
        parentId: "796",
        avgRatingString: "4.6",
        totalRatingsString: "4.9K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:59:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "High%20Protein/rx%20tag%205.png",
              description: "High Protein"
            },
            {
              imageId: "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
              description: "Delivery!"
            },
            {
              imageId: "newg.png",
              description: "Gourmet"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "High Protein",
                    imageId: "High%20Protein/rx%20tag%205.png"
                  }
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Ratnesh_Badges/Rx_Awards_2025/Healthy.png"
                  }
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "70"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/salad-days-gole-market-rest526516",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "378311",
        name: "Blue Tokai Coffee Roasters",
        cloudinaryImageId: "1a0521375f07155eda2f1ed263206831",
        locality: "Chanakyapuri",
        areaName: "Connaught Place",
        costForTwo: "₹600 for two",
        cuisines: [
          "Cafe",
          "Coffee",
          "Beverages"
        ],
        avgRating: 4.6,
        parentId: "2682",
        avgRatingString: "4.6",
        totalRatingsString: "1.5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 4.8,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "4.8 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet"
            }
          ]
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {
          
        },
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/blue-tokai-coffee-roasters-chanakyapuri-connaught-place-rest378311",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "88982",
        name: "Taco Bell",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/5367378a-4509-4a79-aae9-53cbeeb23ea4_88982.JPG",
        locality: "Jawahar Nagar",
        areaName: "Kamla Nagar",
        costForTwo: "₹300 for two",
        cuisines: [
          "Mexican",
          "Fast Food",
          "Snacks"
        ],
        avgRating: 4.2,
        parentId: "1557",
        avgRatingString: "4.2",
        totalRatingsString: "11K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-28 04:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹29"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/taco-bell-jawahar-nagar-kamla-nagar-rest88982",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "128116",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "hgvtyqrxzvpwmbs361er",
        locality: "Kamla Nagar",
        areaName: "Kamla Nagar",
        costForTwo: "₹250 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.2,
        parentId: "4961",
        avgRatingString: "4.2",
        totalRatingsString: "13K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "35-45 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-28 03:45:00",
          opened: true
        },
        badges: {
          
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "925"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/la-pinoz-pizza-kamla-nagar-rest128116",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "62965",
        name: "LunchBox - Meals and Thalis",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/a01e18fe-fb09-4548-af10-f9adadfff0ee_62965.jpg",
        locality: "Minto Road",
        areaName: "Connaught Place",
        costForTwo: "₹200 for two",
        cuisines: [
          "Thalis",
          "North Indian",
          "Biryani"
        ],
        avgRating: 4.2,
        parentId: "4925",
        avgRatingString: "4.2",
        totalRatingsString: "12K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "30-40 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:59:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "High%20Protein/rx%20tag%205.png",
              description: "High Protein"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "High Protein",
                    imageId: "High%20Protein/rx%20tag%205.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/lunchbox-meals-and-thalis-minto-road-connaught-place-rest62965",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "25823",
        name: "Faasos - Wraps, Rolls & Shawarma",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/a294c8fa-2ab6-4cf1-b2e9-5907821d807d_25823.JPG",
        locality: "Connaught Place",
        areaName: "Connaught Place",
        costForTwo: "₹200 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.3,
        parentId: "21809",
        avgRatingString: "4.3",
        totalRatingsString: "18K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "30-40 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:59:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Rolls.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Rolls.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹29"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "3.4",
            ratingCount: "86"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/faasos-wraps-rolls-and-shawarma-connaught-place-rest25823",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "157768",
        name: "The Good Bowl",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/d15835f6-d21d-4308-985b-f34029eb9ee9_157768.jpg",
        locality: "Minto Road",
        areaName: "GANDHI MARKET",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.3,
        parentId: "7918",
        avgRatingString: "4.3",
        totalRatingsString: "4.7K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:59:00",
          opened: true
        },
        badges: {
          
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/the-good-bowl-minto-road-gandhi-market-rest157768",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "8619",
        name: "Bikkgane Biryani",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/40cb7f19-6a78-424c-8d4b-0163bc4f42b8_8619.jpg",
        locality: "PVR Rivoli",
        areaName: "Connaught Place",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          " Hyderabadi",
          " Andhra",
          " Lucknowi",
          " Kolkata",
          " Desserts",
          "Beverages"
        ],
        avgRating: 4.3,
        parentId: "5070",
        avgRatingString: "4.3",
        totalRatingsString: "30K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "35-45 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-28 01:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Biryani.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Biryani.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹89"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "8.4K+"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/bikkgane-biryani-pvr-rivoli-connaught-place-rest8619",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "558793",
        name: "HRX by EatFit",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/6/99e7c153-78d3-4f3e-8251-347572344a29_558793.JPG",
        locality: "BHAGAT SINGH MARKET",
        areaName: "GOLE MARKET",
        costForTwo: "₹450 for two",
        cuisines: [
          "Healthy Food",
          "Salads",
          "Burgers"
        ],
        avgRating: 4.5,
        parentId: "335529",
        avgRatingString: "4.5",
        totalRatingsString: "473",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:45:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "High%20Protein/rx%20tag%205.png",
              description: "High Protein"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "High Protein",
                    imageId: "High%20Protein/rx%20tag%205.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹139"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/hrx-by-eatfit-bhagat-singh-market-gole-market-rest558793",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "64974",
        name: "Wendy's Burgers",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/5fca8f76-d506-49ce-99dd-edfb3f86c9fc_64974.JPG",
        locality: "Kamla Nagar",
        areaName: "Kamla Nagar",
        costForTwo: "₹350 for two",
        cuisines: [
          "Burgers",
          "American",
          "Fast Food",
          "Snacks"
        ],
        avgRating: 4.5,
        parentId: "972",
        avgRatingString: "4.5",
        totalRatingsString: "15K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 5.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "5.5 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:59:00",
          opened: true
        },
        badges: {
          
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹59"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "2.6K+"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/wendys-burgers-kamla-nagar-rest64974",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "186222",
        name: "The Biryani Life",
        cloudinaryImageId: "iatzastkg2qb2cwilcyu",
        locality: "Minto Road",
        areaName: "Connaught Place",
        costForTwo: "₹250 for two",
        cuisines: [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.1,
        parentId: "8496",
        avgRatingString: "4.1",
        totalRatingsString: "1.4K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 23:59:00",
          opened: true
        },
        badges: {
          
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹159"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/the-biryani-life-minto-road-connaught-place-rest186222",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "30207",
        name: "Bikanervala",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/8a4e0848-22b5-452a-aa4e-941dfcc85272_30207.jpg",
        locality: "Jawahar Nagar",
        areaName: "Kamla Nagar",
        costForTwo: "₹300 for two",
        cuisines: [
          "North Indian",
          "Snacks",
          "Chaat",
          "Sweets"
        ],
        avgRating: 4.4,
        veg: true,
        parentId: "45936",
        avgRatingString: "4.4",
        totalRatingsString: "25K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 6,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "6.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-27 22:30:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹9"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/bikanervala-jawahar-nagar-kamla-nagar-rest30207",
        type: "WEBLINK"
      }
    },
    {
      info: {
        id: "107452",
        name: "Chaayos Chai+Snacks=Relax",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_107452.JPG",
        locality: "Kashmiri Gate",
        areaName: "Kashmiri Gate",
        costForTwo: "₹250 for two",
        cuisines: [
          "Beverages",
          "Chaat",
          "Snacks",
          "Bakery",
          "Street Food",
          "healthy",
          "Home Food",
          "Maharashtrian",
          "Italian",
          "Desserts"
        ],
        avgRating: 4.7,
        parentId: "281782",
        avgRatingString: "4.7",
        totalRatingsString: "2.5K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-11-28 00:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                  }
                }
              ]
            },
            textBased: {
              
            },
            textExtendedBadges: {
              
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹84"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {
              
            },
            video: {
              
            }
          }
        },
        reviewsSummary: {
          
        },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {
          
        },
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "1.6K+"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-2d97f40e-9dce-4a68-8944-f8af4b3b8420"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/chaayos-chai-snacks-relax-kashmiri-gate-rest107452",
        type: "WEBLINK"
      }
    }
  ];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img alt="logo-img" src={appLogoUrl} />
      </div>

      <div className="header-links">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
    const {data} = props;
    const {name, avgRating, costForTwo, cloudinaryImageId} = data?.info;
    return (
        <div className="card-rest">
            <img alt="rest-img" src={imageBaseUrl+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
        </div>
    )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="cards-container">
        {
            restList.map(restaurant => {
                return (<RestaurantCard key={restaurant.info.id} data={restaurant}/>)
            })
        }
      </div>
    </div>
  );
};

const AppContainer = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
