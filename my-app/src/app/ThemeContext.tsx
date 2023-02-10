import React, { createContext, useState, useEffect } from "react";
import sideNavRedBG from './assets/patterns/adi.png';
import sideNavBlueBG from './assets/patterns/blue.png';
import sideNavGreenBG from './assets/patterns/tp.png';
import sideNavOrangeBG from './assets/patterns/org.png';

export const ThemeContext = createContext<any>({});

//all global styles
const themes = (template: string, mode: string) => {

  if (template === 'template1' && mode === 'dark') {
    return {

      primaryText: "primaryTextDark",
      mainRedBg: "mainRedBg",
      underline: "redUnderline",
      underLineIndicator: "redUnderLineIndicator",
      surfaceBgTheme: "surfaceDarkBg",
      table: "darkTable",
      inputFill: "inputDark",
      customSelect:"customSelectDark",
      customTab: "customTabRed",
      autocompleteDropdown: "autocompleteDropdownDark",
      themeChangeMain: "themeChangeDark",
      cascadeSelect: "cascadeSelectDark",
      cascadeMenu: "cascadeMenuDark",
      cascadeMenuSubItem: "cascadeMenuSubItemDark",
      metaDataTabBar: "metaDataTabBarDark",
      metaDataTabBarMain: "metaDataTabBarRed",
      contentInput: "contentInputDark",
      search: "searchDark",
      menuItem: "menuItemDark",
      dataTableToolBarMain: "dataTableToolBar",
      tableStrip: "redTableStrip",

      mainColor: {color: '#BC1C4C'},
      mainBg: {backgroundColor: '#BC1C4C'},
      mainPrimaryBg: {backgroundColor: '#3f51b5'},
      surfaceBg: {backgroundColor: '#242526'},
      inputBg: {backgroundColor: '#3A3B3C'},
      stripBg: {backgroundColor: '#3e4042'},
      codeGeneratorPanelBg: {backgroundColor: '#3e4042'},
      themeMain: "themeRed",

      body: {backgroundColor: '#18191a',},

      /*Pre Loader*/
      preLoader: {backgroundColor: '#242526'},

      loader: {
        border: '4px solid #242526',
        borderTop: '4px solid #BC1C4C',
      },

      input: {
        color: '#e4e6eb', backgroundColor: '#3e4042',

        '&:-webkit-autofill': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:hover': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:active': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:focus': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
      },

      textarea: {color: '#e4e6eb', backgroundColor: '#3e4042',},
      select: {color: '#e4e6eb', backgroundColor: '#3e4042',},
      autocompleteContent: {color: '#e4e6eb', backgroundColor: '#3e4042',},

      customTextAreaContent: {
        backgroundColor: '#3e4042',
        '& div': {
          backgroundColor: '#3e4042',
        },
      },

      languageSwitchDrop: {
        '& *': {
          '&:not': {
            '& span': {
              backgroundColor: '#3e4042',
            },
          },
        },
      },

      primaryBtn: {
        border: '1px solid #BC1C4C', backgroundColor: '#BC1C4C',

        '&:hover': {border: '1px solid #BC1C4C', backgroundColor: '#BC1C4C',},
        '&:active': {border: '1px solid #BC1C4C', backgroundColor: '#BC1C4C',},
        '&:focus': {border: '1px solid #BC1C4C', backgroundColor: '#BC1C4C',},
      },

      /*Login*/
      loginContent: {backgroundColor: '#18191a',},
      loginDetailsContent: {backgroundColor: '#242526',},

      loginBgImg: {
        backgroundImage: `url("assets/login/login-bg-1-red.webp`,
      },

      sideNav: {
        backgroundImage: `url(${sideNavRedBG})`,
      },

      sideNavListItemBtn: {
        '&:hover': {color: '#e4e6eb',backgroundColor: '#BC1C4C',},
        '&:active': {color: '#e4e6eb',backgroundColor: '#BC1C4C',},
        '&:focus': {color: '#e4e6eb',backgroundColor: '#BC1C4C',},
      },

      paper: {color: '#e4e6eb',backgroundColor: '#242526',},
      paperPadding0: {color: '#e4e6eb',backgroundColor: '#242526',},

      dataTableToolBar: {backgroundColor: '#242526',},

      modalPaper: {backgroundColor: '#242526',},

      paperSection: {backgroundColor: '#BC1C4C',},

      customTabBar: {backgroundColor: '#242526',},

      hierarchyTableBox: {border: '3px solid #BC1C4C',},

      topBar: {
        backgroundColor: '#BC1C4C',
        topBarMenu: {
          backgroundColor: '#242526',

          '& .MuiMenu-paper': {
            backgroundColor: '#242526',
          },

          '& .MuiToolbar-regular': {
            backgroundColor: '#BC1C4C',
          },
        },
      },

      topToolBar: {backgroundColor: '#BC1C4C',},
    }
  } else if (template === 'template1' && mode === 'light') {
    return {
      primaryText: "primaryTextLight",
      mainRedBg: "mainRedBg",
      underline: "redUnderline",
      underLineIndicator: "redUnderLineIndicator",
      surfaceBgTheme: "surfaceLightBg",
      table: "lightTable",
      inputFill: "inputLight",
      customSelect:"customSelectLight",
      customTab: "customTabRed",
      autocompleteDropdown: "autocompleteDropdownLight",
      themeChangeMain: "themeChangeLight",
      themeMain: "themeRed",
      cascadeSelect: "cascadeSelectLight",
      cascadeMenu: "cascadeMenuLight",
      cascadeMenuSubItem: "cascadeMenuSubItemDark",
      metaDataTabBar: "metaDataTabBarLight",
      metaDataTabBarMain: "metaDataTabBarRed",
      contentInput: "contentInputLight",
      search: "searchLight",
      menuItem: "menuItemLight",
      dataTableToolBarMain: "dataTableToolBar",
      tableStrip: "redTableStrip",

      mainColor: {color: '#BC1C4C'},
      mainBg: {backgroundColor: '#BC1C4C'},
      mainPrimaryBg: {backgroundColor: '#3f51b5'},
      surfaceBg: {backgroundColor: '#ffffff'},
      inputBg: {backgroundColor: '#3A3B3C'},
      stripBg: {backgroundColor: '#e4e6eb'},
      codeGeneratorPanelBg: {backgroundColor: '#e4e6eb'},

      body: {backgroundColor: '#f0f2f5',},

      /*Pre Loader*/
      preLoader: {backgroundColor: '#ffffff'},

      loader: {
        border: '4px solid #ffffff',
        borderTop: '4px solid #BC1C4C',
      },

      input: {
        color: '#5e5e5e', backgroundColor: '#e4e6eb',

        '&:-webkit-autofill': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:hover': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:active': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:focus': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
      },

      textarea: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},
      select: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},
      autocompleteContent: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},

      customTextAreaContent: {backgroundColor: '#e4e6eb',},

      languageSwitchDrop: {
        '& *': {
          '&:not': {
            '& span': {
              backgroundColor: '#e4e6eb',
            },
          },
        },
      },


      primaryBtn: {
        border: '1px solid #BC1C4C', backgroundColor: '#BC1C4C',

        '&:hover': {border: '1px solid #BC1C4C', backgroundColor: '#BC1C4C',},
        '&:active': {border: '1px solid #BC1C4C', backgroundColor: '#BC1C4C',},
        '&:focus': {border: '1px solid #BC1C4C', backgroundColor: '#BC1C4C',},
      },

      /*Login*/
      loginContent: {backgroundColor: '#f0f2f5',},
      loginDetailsContent: {backgroundColor: '#ffffff',},
      loginBgImg: {
        backgroundImage: `url("assets/login/login-bg-1-red.webp`,
      },


      sideNav: {
        backgroundImage: `url(${sideNavRedBG})`,
      },

      sideNavListItemBtn: {
        '&:hover': {color: '#5e5e5e',backgroundColor: '#BC1C4C',},
        '&:active': {color: '#5e5e5e',backgroundColor: '#BC1C4C',},
        '&:focus': {color: '#5e5e5e',backgroundColor: '#BC1C4C',},
      },

      paper: {color: '#5e5e5e',backgroundColor: '#ffffff',},
      paperPadding0: {color: '#5e5e5e',backgroundColor: '#ffffff',},

      dataTableToolBar: {backgroundColor: '#ffffff',},


      modalPaper: {backgroundColor: '#ffffff',},

      paperSection: {backgroundColor: '#BC1C4C',},

      customTabBar: {backgroundColor: '#ffffff',},

      hierarchyTableBox: {border: '3px solid #BC1C4C',},

      topBar: {
        backgroundColor: '#BC1C4C',
        topBarMenu: {
          backgroundColor: '#ffffff',

          '& .MuiMenu-paper': {
            backgroundColor: '#ffffff',
          },

          '& .MuiToolbar-regular': {
            backgroundColor: '#BC1C4C',
          },
        },
      },

      topToolBar: {backgroundColor: '#BC1C4C',},
    }
  } else if (template === 'template2' && mode === 'dark') {
    return {
      template: "temp 2",

      primaryText: "primaryTextDark",
      mainBlueBg: "mainBlueBg",
      underline: "blueUnderline",
      underLineIndicator: "blueUnderLineIndicator",
      surfaceBgTheme: "surfaceDarkBg",
      table: "darkTable",
      inputFill: "inputDark",
      customSelect:"customSelectDark",
      customTab: "customTabBlue",
      autocompleteDropdown: "autocompleteDropdownDark",
      themeChangeMain: "themeChangeDark",
      themeMain: "themeBlue",
      cascadeSelect: "cascadeSelectDark",
      cascadeMenu: "cascadeMenuDark",
      cascadeMenuSubItem: "cascadeMenuSubItemDark",
      metaDataTabBar: "metaDataTabBarDark",
      metaDataTabBarMain: "metaDataTabBarBlue",
      contentInput: "contentInputDark",
      search: "searchDark",
      menuItem: "menuItemDark",
      dataTableToolBarMain: "dataTableToolBar",
      tableStrip: "blueTableStrip",

      mainColor: {color: '#3561b5'},
      mainBg: {backgroundColor: '#3561b5'},
      mainPrimaryBg: {backgroundColor: '#3f51b5'},
      surfaceBg: {backgroundColor: '#242526'},
      inputBg: {backgroundColor: '#3A3B3C'},
      stripBg: {backgroundColor: '#3e4042'},
      codeGeneratorPanelBg: {backgroundColor: '#3e4042'},

      body: {backgroundColor: '#18191a',},

      /*Pre Loader*/
      preLoader: {backgroundColor: '#242526'},

      loader: {
        border: '4px solid #242526',
        borderTop: '4px solid #3561b5',
      },

      input: {
        color: '#e4e6eb', backgroundColor: '#3e4042',

        '&:-webkit-autofill': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:hover': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:active': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:focus': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
      },

      textarea: {color: '#e4e6eb', backgroundColor: '#3e4042',},
      select: {color: '#e4e6eb', backgroundColor: '#3e4042',},
      autocompleteContent: {color: '#e4e6eb', backgroundColor: '#3e4042',},

      customTextAreaContent: {backgroundColor: '#3e4042',},

      languageSwitchDrop: {
        '& *': {
          '&:not': {
            '& span': {
              backgroundColor: '#3e4042',
            },
          },
        },
      },


      primaryBtn: {
        border: '1px solid #3561b5', backgroundColor: '#3561b5',

        '&:hover': {border: '1px solid #3561b5', backgroundColor: '#3561b5',},
        '&:active': {border: '1px solid #3561b5', backgroundColor: '#3561b5',},
        '&:focus': {border: '1px solid #3561b5', backgroundColor: '#3561b5',},
      },

      /*Login*/
      loginContent: {backgroundColor: '#18191a',},
      loginDetailsContent: {backgroundColor: '#242526',},

      loginBgImg: {
        backgroundImage: `url("assets/login/login-bg-1-blue.webp`,
      },


      sideNav: {
        backgroundImage: `url(${sideNavBlueBG})`,
      },

      sideNavListItemBtn: {
        '&:hover': {color: '#e4e6eb',backgroundColor: '#3561b5',},
        '&:active': {color: '#e4e6eb',backgroundColor: '#3561b5',},
        '&:focus': {color: '#e4e6eb',backgroundColor: '#3561b5',},
      },

      paper: {color: '#e4e6eb',backgroundColor: '#242526',},
      paperPadding0: {color: '#e4e6eb',backgroundColor: '#242526',},

      dataTableToolBar: {backgroundColor: '#242526',},

      modalPaper: {backgroundColor: '#242526',},

      paperSection: {backgroundColor: '#3561b5',},

      customTabBar: {backgroundColor: '#242526',},

      hierarchyTableBox: {border: '3px solid #3561b5',},

      topBar: {
        backgroundColor: '#3561b5',
        topBarMenu: {
          backgroundColor: '#242526',

          '& .MuiMenu-paper': {
            backgroundColor: '#242526',
          },

          '& .MuiToolbar-regular': {
            backgroundColor: '#3561b5',
          },
        },
      },

      topToolBar: {backgroundColor: '#3561b5',},

    }
  } else if (template === 'template2' && mode === 'light') {
    return {
      template: "temp 2",

      primaryText: "primaryTextLight",
      mainBlueBg: "mainBlueBg",
      underline: "blueUnderline",
      underLineIndicator: "blueUnderLineIndicator",
      surfaceBgTheme: "surfaceLightBg",
      table: "lightTable",
      inputFill: "inputLight",
      customSelect:"customSelectLight",
      customTab: "customTabBlue",
      autocompleteDropdown: "autocompleteDropdownLight",
      themeChangeMain: "themeChangeLight",
      themeMain: "themeBlue",
      cascadeSelect: "cascadeSelectLight",
      cascadeMenu: "cascadeMenuLight",
      cascadeMenuSubItem: "cascadeMenuSubItemDark",
      metaDataTabBar: "metaDataTabBarLight",
      metaDataTabBarMain: "metaDataTabBarBlue",
      contentInput: "contentInputLight",
      search: "searchLight",
      menuItem: "menuItemLight",
      dataTableToolBarMain: "dataTableToolBar",
      tableStrip: "blueTableStrip",

      mainColor: {color: '#3561b5'},
      mainBg: {backgroundColor: '#3561b5'},
      mainPrimaryBg: {backgroundColor: '#3f51b5'},
      surfaceBg: {backgroundColor: '#ffffff'},
      inputBg: {backgroundColor: '#3A3B3C'},
      stripBg: {backgroundColor: '#e4e6eb'},
      codeGeneratorPanelBg: {backgroundColor: '#e4e6eb'},

      body: {backgroundColor: '#f0f2f5',},

      /*Pre Loader*/
      preLoader: {backgroundColor: '#ffffff'},

      loader: {
        border: '4px solid #ffffff',
        borderTop: '4px solid #3561b5',
      },

      input: {
        color: '#5e5e5e', backgroundColor: '#e4e6eb',

        '&:-webkit-autofill': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:hover': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:active': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:focus': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
      },

      textarea: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},
      select: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},
      autocompleteContent: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},

      customTextAreaContent: {backgroundColor: '#e4e6eb',},

      languageSwitchDrop: {
        '& *': {
          '&:not': {
            '& span': {
              backgroundColor: '#e4e6eb',
            },
          },
        },
      },

      primaryBtn: {
        border: '1px solid #3561b5', backgroundColor: '#3561b5',

        '&:hover': {border: '1px solid #3561b5', backgroundColor: '#3561b5',},
        '&:active': {border: '1px solid #3561b5', backgroundColor: '#3561b5',},
        '&:focus': {border: '1px solid #3561b5', backgroundColor: '#3561b5',},
      },

      /*Login*/
      loginContent: {backgroundColor: '#f0f2f5',},
      loginDetailsContent: {backgroundColor: '#ffffff',},

      loginBgImg: {
        backgroundImage: `url("assets/login/login-bg-1-blue.webp`,
      },

      sideNav: {
        backgroundImage: `url(${sideNavBlueBG})`,
      },

      sideNavListItemBtn: {
        '&:hover': {color: '#5e5e5e',backgroundColor: '#3561b5',},
        '&:active': {color: '#5e5e5e',backgroundColor: '#3561b5',},
        '&:focus': {color: '#5e5e5e',backgroundColor: '#3561b5',},
      },

      paper: {color: '#5e5e5e',backgroundColor: '#ffffff',},
      paperPadding0: {color: '#5e5e5e',backgroundColor: '#ffffff',},

      dataTableToolBar: {backgroundColor: '#ffffff',},

      modalPaper: {backgroundColor: '#ffffff',},

      paperSection: {backgroundColor: '#3561b5',},

      customTabBar: {backgroundColor: '#ffffff',},

      hierarchyTableBox: {border: '3px solid #3561b5',},

      topBar: {
        backgroundColor: '#3561b5',
        topBarMenu: {
          backgroundColor: '#ffffff',

          '& .MuiMenu-paper': {
            backgroundColor: '#ffffff',
          },

          '& .MuiToolbar-regular': {
            backgroundColor: '#3561b5',
          },
        },
      },

      topToolBar: {backgroundColor: '#3561b5',},

    }
  } else if (template === 'template3' && mode === 'dark') {
    return {
      template: "temp 3",

      primaryText: "primaryTextDark",
      mainGreenBg: "mainGreenBg",
      underline: "greenUnderline",
      underLineIndicator: "greenUnderLineIndicator",
      surfaceBgTheme: "surfaceDarkBg",
      table: "darkTable",
      inputFill: "inputDark",
      customSelect:"customSelectDark",
      customTab: "customTabGreen",
      autocompleteDropdown: "autocompleteDropdownDark",
      themeChangeMain: "themeChangeDark",
      themeMain: "themeGreen",
      cascadeSelect: "cascadeSelectDark",
      cascadeMenu: "cascadeMenuDark",
      cascadeMenuSubItem: "cascadeMenuSubItemDark",
      metaDataTabBar: "metaDataTabBarDark",
      metaDataTabBarMain: "metaDataTabBarGreen",
      contentInput: "contentInputDark",
      search: "searchDark",
      menuItem: "menuItemDark",
      dataTableToolBarMain: "dataTableToolBar",
      tableStrip: "greenTableStrip",

      mainColor: {color: '#2d823d'},
      mainBg: {backgroundColor: '#2d823d'},
      mainPrimaryBg: {backgroundColor: '#3f51b5'},
      surfaceBg: {backgroundColor: '#242526'},
      inputBg: {backgroundColor: '#3A3B3C'},
      stripBg: {backgroundColor: '#3e4042'},
      codeGeneratorPanelBg: {backgroundColor: '#3e4042'},

      body: {backgroundColor: '#18191a',},

      /*Pre Loader*/
      preLoader: {backgroundColor: '#242526'},

      loader: {
        border: '4px solid #242526',
        borderTop: '4px solid #2d823d',
      },

      input: {
        color: '#e4e6eb', backgroundColor: '#3e4042',

        '&:-webkit-autofill': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:hover': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:active': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:focus': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
      },

      textarea: {color: '#e4e6eb', backgroundColor: '#3e4042',},
      select: {color: '#e4e6eb', backgroundColor: '#3e4042',},
      autocompleteContent: {color: '#e4e6eb', backgroundColor: '#3e4042',},

      customTextAreaContent: {backgroundColor: '#3e4042',},

      languageSwitchDrop: {
        '& *': {
          '&:not': {
            '& span': {
              backgroundColor: '#3e4042',
            },
          },
        },
      },

      primaryBtn: {
        border: '1px solid #2d823d', backgroundColor: '#2d823d',

        '&:hover': {border: '1px solid #2d823d', backgroundColor: '#2d823d',},
        '&:active': {border: '1px solid #2d823d', backgroundColor: '#2d823d',},
        '&:focus': {border: '1px solid #2d823d', backgroundColor: '#2d823d',},
      },

      /*Login*/
      loginContent: {backgroundColor: '#18191a',},
      loginDetailsContent: {backgroundColor: '#242526',},

      loginBgImg: {
        backgroundImage: `url("assets/login/login-bg-1-green.webp`,
      },

      sideNav: {
        backgroundImage: `url(${sideNavGreenBG})`,
      },

      sideNavListItemBtn: {
        '&:hover': {color: '#e4e6eb',backgroundColor: '#2d823d',},
        '&:active': {color: '#e4e6eb',backgroundColor: '#2d823d',},
        '&:focus': {color: '#e4e6eb',backgroundColor: '#2d823d',},
      },

      paper: {color: '#e4e6eb',backgroundColor: '#242526',},
      paperPadding0: {color: '#e4e6eb',backgroundColor: '#242526',},

      dataTableToolBar: {backgroundColor: '#242526',},

      modalPaper: {backgroundColor: '#242526',},

      paperSection: {backgroundColor: '#2d823d',},

      customTabBar: {backgroundColor: '#242526',},

      hierarchyTableBox: {border: '3px solid #2d823d',},

      topBar: {
        backgroundColor: '#2d823d',
        topBarMenu: {
          backgroundColor: '#242526',

          '& .MuiMenu-paper': {
            backgroundColor: '#242526',
          },

          '& .MuiToolbar-regular': {
            backgroundColor: '#2d823d',
          },
        },
      },

      topToolBar: {backgroundColor: '#2d823d',},
    }
  } else if (template === 'template3' && mode === 'light') {
    return {
      template: "temp 3",

      primaryText: "primaryTextLight",
      mainGreenBg: "mainGreenBg",
      underline: "greenUnderline",
      underLineIndicator: "greenUnderLineIndicator",
      surfaceBgTheme: "surfaceLightBg",
      table: "lightTable",
      inputFill: "inputLight",
      customSelect:"customSelectLight",
      customTab: "customTabGreen",
      autocompleteDropdown: "autocompleteDropdownLight",
      themeChangeMain: "themeChangeLight",
      themeMain: "themeGreen",
      cascadeSelect: "cascadeSelectLight",
      cascadeMenu: "cascadeMenuLight",
      cascadeMenuSubItem: "cascadeMenuSubItemDark",
      metaDataTabBar: "metaDataTabBarLight",
      metaDataTabBarMain: "metaDataTabBarGreen",
      contentInput: "contentInputLight",
      search: "searchLight",
      menuItem: "menuItemLight",
      dataTableToolBarMain: "dataTableToolBar",
      tableStrip: "greenTableStrip",

      mainColor: {color: '#2d823d'},
      mainBg: {backgroundColor: '#2d823d'},
      mainPrimaryBg: {backgroundColor: '#3f51b5'},
      surfaceBg: {backgroundColor: '#ffffff'},
      inputBg: {backgroundColor: '#3A3B3C'},
      stripBg: {backgroundColor: '#e4e6eb'},
      codeGeneratorPanelBg: {backgroundColor: '#e4e6eb'},

      body: {backgroundColor: '#f0f2f5',},

      /*Pre Loader*/
      preLoader: {backgroundColor: '#ffffff'},

      loader: {
        border: '4px solid #ffffff',
        borderTop: '4px solid #2d823d',
      },

      input: {
        color: '#5e5e5e', backgroundColor: '#e4e6eb',

        '&:-webkit-autofill': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:hover': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:active': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:focus': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
      },

      textarea: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},
      select: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},
      autocompleteContent: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},

      customTextAreaContent: {backgroundColor: '#e4e6eb',},

      languageSwitchDrop: {
        '& *': {
          '&:not': {
            '& span': {
              backgroundColor: '#e4e6eb',
            },
          },
        },
      },

      primaryBtn: {
        border: '1px solid #2d823d', backgroundColor: '#2d823d',

        '&:hover': {border: '1px solid #2d823d', backgroundColor: '#2d823d',},
        '&:active': {border: '1px solid #2d823d', backgroundColor: '#2d823d',},
        '&:focus': {border: '1px solid #2d823d', backgroundColor: '#2d823d',},
      },

      /*Login*/
      loginContent: {backgroundColor: '#f0f2f5',},
      loginDetailsContent: {backgroundColor: '#ffffff',},

      loginBgImg: {
        backgroundImage: `url("assets/login/login-bg-1-green.webp`,
      },


      sideNav: {
        backgroundImage: `url(${sideNavGreenBG})`,
      },

      sideNavListItemBtn: {
        '&:hover': {color: '#5e5e5e',backgroundColor: '#2d823d',},
        '&:active': {color: '#5e5e5e',backgroundColor: '#2d823d',},
        '&:focus': {color: '#5e5e5e',backgroundColor: '#2d823d',},
      },

      paper: {color: '#5e5e5e',backgroundColor: '#ffffff',},
      paperPadding0: {color: '#5e5e5e',backgroundColor: '#ffffff',},

      dataTableToolBar: {backgroundColor: '#ffffff',},

      modalPaper: {backgroundColor: '#ffffff',},

      paperSection: {backgroundColor: '#2d823d',},

      customTabBar: {backgroundColor: '#ffffff',},

      hierarchyTableBox: {border: '3px solid #2d823d',},

      topBar: {
        backgroundColor: '#2d823d',
        topBarMenu: {
          backgroundColor: '#ffffff',

          '& .MuiMenu-paper': {
            backgroundColor: '#ffffff',
          },

          '& .MuiToolbar-regular': {
            backgroundColor: '#2d823d',
          },
        },
      },

      topToolBar: {backgroundColor: '#2d823d',},

    }
  } else if (template === 'template4' && mode === 'dark') {
    return {
      template: "temp 4",

      primaryText: "primaryTextDark",
      mainOrange: "mainOrange",
      underline: "orangeUnderline",
      underLineIndicator: "orangeUnderLineIndicator",
      surfaceBgTheme: "surfaceDarkBg",
      table: "darkTable",
      inputFill: "inputDark",
      customSelect:"customSelectDark",
      customTab: "customTabOrange",
      autocompleteDropdown: "autocompleteDropdownDark",
      themeChangeMain: "themeChangeDark",
      themeMain: "themeOrange",
      cascadeSelect: "cascadeSelectDark",
      cascadeMenu: "cascadeMenuDark",
      cascadeMenuSubItem: "cascadeMenuSubItemDark",
      metaDataTabBar: "metaDataTabBarDark",
      metaDataTabBarMain: "metaDataTabBarOrange",
      contentInput: "contentInputDark",
      search: "searchDark",
      menuItem: "menuItemDark",
      dataTableToolBarMain: "dataTableToolBar",
      tableStrip: "orangeTableStrip",

      mainColor: {color: '#E65100'},
      mainBg: {backgroundColor: '#E65100'},
      mainPrimaryBg: {backgroundColor: '#3f51b5'},
      surfaceBg: {backgroundColor: '#242526'},
      inputBg: {backgroundColor: '#3A3B3C'},
      stripBg: {backgroundColor: '#3e4042'},
      codeGeneratorPanelBg: {backgroundColor: '#3e4042'},

      body: {backgroundColor: '#18191a',},

      /*Pre Loader*/
      preLoader: {backgroundColor: '#242526'},

      loader: {
        border: '4px solid #242526',
        borderTop: '4px solid #E65100',
      },

      input: {
        color: '#e4e6eb', backgroundColor: '#3e4042',

        '&:-webkit-autofill': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:hover': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:active': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
        '&:-webkit-autofill:focus': {webKitTextFillColor: '#e4e6eb', webKitBoxShadow: '0 0 0 30px #3e4042 inset',},
      },

      textarea: {color: '#e4e6eb', backgroundColor: '#3e4042',},
      select: {color: '#e4e6eb', backgroundColor: '#3e4042',},
      autocompleteContent: {color: '#e4e6eb', backgroundColor: '#3e4042',},

      customTextAreaContent: {backgroundColor: '#3e4042',},

      languageSwitchDrop: {
        '& *': {
          '&:not': {
            '& span': {
              backgroundColor: '#3e4042',
            },
          },
        },
      },

      primaryBtn: {
        border: '1px solid #E65100', backgroundColor: '#E65100',

        '&:hover': {border: '1px solid #E65100', backgroundColor: '#E65100',},
        '&:active': {border: '1px solid #E65100', backgroundColor: '#E65100',},
        '&:focus': {border: '1px solid #E65100', backgroundColor: '#E65100',},
      },

      /*Login*/
      loginContent: {backgroundColor: '#18191a',},
      loginDetailsContent: {backgroundColor: '#242526',},

      loginBgImg: {
        backgroundImage: `url("assets/login/login-bg-1-orange.webp`,
      },

      sideNav: {
        backgroundImage: `url(${sideNavOrangeBG})`,
      },

      sideNavListItemBtn: {
        '&:hover': {color: '#e4e6eb',backgroundColor: '#E65100',},
        '&:active': {color: '#e4e6eb',backgroundColor: '#E65100',},
        '&:focus': {color: '#e4e6eb',backgroundColor: '#E65100',},
      },

      paper: {color: '#e4e6eb',backgroundColor: '#242526',},
      paperPadding0: {color: '#e4e6eb',backgroundColor: '#242526',},

      dataTableToolBar: {backgroundColor: '#242526',},

      modalPaper: {backgroundColor: '#242526',},

      paperSection: {backgroundColor: '#E65100',},

      customTabBar: {backgroundColor: '#242526',},

      hierarchyTableBox: {border: '3px solid #E65100',},

      topBar: {
        backgroundColor: '#E65100',
        topBarMenu: {
          backgroundColor: '#242526',

          '& .MuiMenu-paper': {
            backgroundColor: '#242526',
          },

          '& .MuiToolbar-regular': {
            backgroundColor: '#E65100',
          },
        },
      },

      topToolBar: {backgroundColor: '#E65100',},

    }
  } else {
    return {
      template: "temp 4",

      primaryText: "primaryTextLight",
      mainOrange: "mainOrange",
      underline: "orangeUnderline",
      underLineIndicator: "orangeUnderLineIndicator",
      surfaceBgTheme: "surfaceLightBg",
      table: "lightTable",
      inputFill: "inputLight",
      customSelect:"customSelectLight",
      customTab: "customTabOrange",
      autocompleteDropdown: "autocompleteDropdownLight",
      themeChangeMain: "themeChangeLight",
      themeMain: "themeOrange",
      cascadeSelect: "cascadeSelectLight",
      cascadeMenu: "cascadeMenuLight",
      cascadeMenuSubItem: "cascadeMenuSubItemDark",
      metaDataTabBar: "metaDataTabBarLight",
      metaDataTabBarMain: "metaDataTabBarOrange",
      contentInput: "contentInputLight",
      search: "searchLight",
      menuItem: "menuItemLight",
      dataTableToolBarMain: "dataTableToolBar",
      tableStrip: "orangeTableStrip",

      mainColor: {color: '#E65100'},
      mainBg: {backgroundColor: '#E65100'},
      mainPrimaryBg: {backgroundColor: '#3f51b5'},
      surfaceBg: {backgroundColor: '#ffffff'},
      inputBg: {backgroundColor: '#3A3B3C'},
      stripBg: {backgroundColor: '#e4e6eb'},
      codeGeneratorPanelBg: {backgroundColor: '#e4e6eb'},

      body: {backgroundColor: '#f0f2f5',},

      /*Pre Loader*/
      preLoader: {backgroundColor: '#ffffff'},

      loader: {
        border: '4px solid #ffffff',
        borderTop: '4px solid #E65100',
      },

      input: {
        color: '#5e5e5e', backgroundColor: '#e4e6eb',

        '&:-webkit-autofill': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:hover': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:active': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
        '&:-webkit-autofill:focus': {webKitTextFillColor: '#5e5e5e', webKitBoxShadow: '0 0 0 30px #e4e6eb inset',},
      },

      textarea: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},
      select: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},
      autocompleteContent: {color: '#5e5e5e', backgroundColor: '#e4e6eb',},

      customTextAreaContent: {backgroundColor: '#e4e6eb',},

      languageSwitchDrop: {
        '& *': {
          '&:not': {
            '& span': {
              backgroundColor: '#e4e6eb',
            },
          },
        },
      },

      primaryBtn: {
        border: '1px solid #E65100', backgroundColor: '#E65100',

        '&:hover': {border: '1px solid #E65100', backgroundColor: '#E65100',},
        '&:active': {border: '1px solid #E65100', backgroundColor: '#E65100',},
        '&:focus': {border: '1px solid #E65100', backgroundColor: '#E65100',},
      },

      /*Login*/
      loginContent: {backgroundColor: '#f0f2f5',},
      loginDetailsContent: {backgroundColor: '#ffffff',},

      loginBgImg: {
        backgroundImage: `url("assets/login/login-bg-1-orange.webp`,
      },

      sideNav: {
        backgroundImage: `url(${sideNavOrangeBG})`,
      },

      sideNavListItemBtn: {
        '&:hover': {color: '#5e5e5e',backgroundColor: '#E65100',},
        '&:active': {color: '#5e5e5e',backgroundColor: '#E65100',},
        '&:focus': {color: '#5e5e5e',backgroundColor: '#E65100',},
      },

      paper: {color: '#5e5e5e',backgroundColor: '#ffffff',},
      paperPadding0: {color: '#5e5e5e',backgroundColor: '#ffffff',},

      dataTableToolBar: {backgroundColor: '#ffffff',},

      modalPaper: {backgroundColor: '#ffffff',},

      paperSection: {backgroundColor: '#E65100',},

      customTabBar: {backgroundColor: '#ffffff',},

      hierarchyTableBox: {border: '3px solid #E65100',},

      topBar: {
        backgroundColor: '#E65100',
        topBarMenu: {
          backgroundColor: '#ffffff',

          '& .MuiMenu-paper': {
            backgroundColor: '#ffffff',
          },

          '& .MuiToolbar-regular': {
            backgroundColor: '#E65100',
          },
        },
      },

      topToolBar: {backgroundColor: '#E65100',},

    }
  }

}


export const ThemeProvider: React.FC = (props: any) => {

  const initialTemplate = (localStorage.getItem('template')) ? (localStorage.getItem('template')) : 'template1'
  const initialMode = (localStorage.getItem('template')) ? (localStorage.getItem('mode')) : 'light'

  //holds values of selectd template and m<ode (light or dark)
  const [template, setTemplate] = useState<string>(initialTemplate + "")
  const [mode, setMode] = useState<string>(initialMode + "")

  //hold styles that selected template and mode
  const [customStyles, setCustomStyles] = useState<any>({})

  useEffect(() => {
    setCustomStyles(themes(template, mode))
  }, [template, mode])

  //using these change customStypels
  const theme = (a_template: string, a_mode: string) => {
    setCustomStyles(themes(a_template, a_mode));
  }

  return (
      <ThemeContext.Provider value={{
        template, setTemplate,
        mode, setMode,
        customStyles, setCustomStyles,
        theme
      }}>
        {props.children}
      </ThemeContext.Provider>
  );
};
