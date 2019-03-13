import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    constructor() {

    }
public BASEURL={
}
  public PASS_KEY={
  }



    public LOGIN = {
       USERNAME_REQUIRED: 'User name should not be blank',
      PASSWORD_REQUIRED: 'Password should not be blank ',
      USER_NOT_LOGGED_NOTIFICATION:'To view the update, user must be login in to the application',
      REQUIREDUSERNAMEMAXLENGTH:'Max Length is 60 Characters',
    }

    public HOMENEWS_HIDE_SHOW = {
        BUSINESSNEWS:false,
    }
    public EDITPROFILE={
        FIRST_NAME_REQUIRED:'First name should not be blank',
        LAST_NAME_REQUIRED:'Last name should not be blank',
        JOB_TITLE:'Job title should not be blank',
        CONTACT_NUMBER:'Contact number should not be blank',
        CONTACT_DETAIL:'Contact detail should not be blank',
        DISABLED_NOTIFICATION:'Notification is disable by user',
        REQUIREDFIRSTNAMEMAXLENGTH:'Max Length is 20 Characters',
        REQUIREDLASTNAMEMAXLENGTH:'Max Length is 20 Characters',
        REQUIREDJOBTITLEMAXLENGTH:'Max Length is 30 Characters',
        REQUIREDCONTACTDETAILSMAXLENGTH:'Max Length is 255 Characters',
        REQUIREDCONTACTMAXLENGTH:'Max Length is 30 Characters',
    }
    public TEAMOFMONTH={
        NOMINATINGTEAMNAME:'Nomination team name required',
        NOMINATIONREASON:'Nomination team reason required',
        REQUIREDMAXLENGTH:'Max Length is 2000 Characters',
        REQUIREDNAMEMAXLENGTH:'Max Length is 255 Characters',
        REQUIREDJOBTITLEMAXLENGTH:'Max Length is 30 Characters',
        REQUIREDCHARITYMAXLENGTH:'Max Length is 255 Characters',
        REQUIREDCONTACTDETAILSMAXLENGTH:'Max Length is 255 Characters',
        REQUIREDCONTACTMAXLENGTH:'Max Length is 30 Characters',

        PERSONJOBTITLE:'Person job title required',
        CHARITY_REQUIRED:'Charity required'

    }






    public ABOUTPAGE = {
        VERSION_NUMBER:"1.0.1"
    }
    public PAGINATION = {
        PAGE_SIZE:"8"
    }

    public COMMON_APP_MESSAGE = {
        LOADING_LOADER: "Loading",
        LOGIN_ERROR: "Unable to login into system, please check credentials",
        UNABLE_TO_CONNECT: "Unable to connect, please try later",
        SERVICE_NOT_FOUND: "Unable to connect, please contact system administrator",
        TIMEOUT_ERROR: "Request Timeout, please try again later",
        UNKNOWN_ERROR: "Something went wrong, please try again later",
        SERVER_ERROR: "Server error occurred, please try later",
        WEBSERVICE_FAILED: "Please check your internet connection or contact system administrator",
        SERVER_DATA_ERROR: "Unable to get valid data from server, please contact system administrator",
        NO_NETWORK_MESSAGE: "Network unavailable, please check your internet connection",
        NO_NETWORK_TITLE: "No Internet Connection",
        GPS_UNAVAILABLE: "Unable to get GPS location, please check your GPS setting",
        GPS_TURN_OFF: "GPS location seems turned off, please turn on GPS location",
        NETWORK_ONLINE: "You are now online",
        NETWORK_OFFLINE: "You are now offline",
        NO_NETWORK_MESSAGE_AND_OFFLINE_WORK: "You are currently offline, for latest data please check your internet connection and re-launch application",
    }

    public MENU_ICONS_PATH = {
        HOME_ICON:'assets/menu/home_gray.svg',
        HAVE_YOU_SAY_ICON:'assets/menu/have_your_say_menu_gray.svg',
        NOTIFICATION_ICON:'assets/menu/notification_menu_gray.svg',
        ABOUT_ICON:'assets/menu/about_app_gray.svg',
        HELP_ICON :'assets/menu/help_gray.svg',
        LOGOUT_ICON: 'assets/menu/exit_gray.svg',

    }
    public USER_LOGIN_INFO = {
      USER_NAME:'David',
      PASS_WORD:'Temp@123',
  }
  public NEWS_INFORMATION= [
    {
      "thumbnail": "assets/news/analytics.png",
      "newsTitle": "What’s the Deal with Virtual Reality?",
      "shortDisc": "Has all the hype about virtual reality intrigued you? What’s going on with this virtual reality stuff anyway?",
      "longDisc": "Now, you may have been thinking to yourself how isolating virtual reality seems. As fun as it is to watch your friend crawl around your living room with funny goggles on their face, wouldn’t VR be much more fun if more people could be involved and experiencing the same thing? Luckily, I wasn’t the only one with this line of thought, and The Good Stuff created another great video in their series exploring VR that tackles the ultimate in virtual reality, creating a real life Holodeck.",
      "CreatedDateFormatted":"10 Feb, 2019"
    },
    {
      "thumbnail": "assets/news/broadcast.png",
      "newsTitle": "Saving the Rainforest with Old Cell Phones",
      "shortDisc": "Rainforest Connection could be saving the rainforest with old cell phones!",
      "longDisc": "",
      "CreatedDateFormatted":"08 Feb, 2019"
    },
    {
      "thumbnail": "assets/news/development.png",
      "newsTitle": "Helping the Blind See With Their Tongues",
      "shortDisc": "Technology, for me, its giving something back to somebody who was taken out of humanity",
      "CreatedDateFormatted":"30 Jan, 2019"
    },
    {
      "thumbnail": "assets/news/email.png",
      "newsTitle": "Mind Bending Technology and Magic",
      "shortDisc": "Prepare to have your mind bent into places you didn’t think possible!",
      "longDisc": "Though this imagery is incredible, what does this mean for a world beyond this performance? Perhaps, in our inundation with technology, we are forced to push ourselves further and further to reach that next moment of wonder.",
      "CreatedDateFormatted":"20 Jan, 2019"
    },
    {
      "thumbnail": "assets/news/hiring.png",
      "newsTitle": "Are Video Games Bad for You, Really?",
      "shortDisc": "Is it possible that video games can actually help our brains? ",
      "longDisc": "Ever since their invention, there have been debates and stigma over the impact video games have on brains. On one side, you have the fact that people are sitting stationary for a long time, which is detrimental to their overall health. (But any one of us with an office job can relate to that.) On the other side, there’s the idea that video games are training the brain.",
      "CreatedDateFormatted":"01 Jan, 2019"
    },
    {
      "thumbnail": "assets/news/television.png",
      "newsTitle": "Lightning: Are We Really Safe in Airplanes and Cars?",
      "shortDisc": "The wonder of lightning may be a timeless connection between people the world over.",
      "longDisc": "Have you ever stopped to think about why our earliest ancestors came down out of the safety of the trees and spread across the planet? The more I learn about innovators and thought leaders, the more certain I am that curiosity is our greatest asset. Humans are naturally curious and perhaps that’s at the heart of our evolution.",
      "CreatedDateFormatted":"31 Dec, 2018"
    },
    {
      "thumbnail": "assets/news/videocall.png",
      "newsTitle": "How an Engineer Created a Band that Broke the Charts",
      "shortDisc": "Tom Scholz went from being an engineer to playing music in front of thousands of screaming fans. And why should we care?",
      "CreatedDateFormatted":"20 Dec, 2018"
    },
    {
      "thumbnail": "assets/news/hiring.png",
      "newsTitle": "Supporting Education in the Mountains of Nepal",
      "shortDisc": "The true beauty of Nepal isn’t in the mountains, but the people who live in their shadow",
      "longDisc": "",
      "CreatedDateFormatted":"01 Nov, 2018"
    }
  ]


}
