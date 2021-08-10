import { SpotifyShowService } from './../../services/spotify-show.service';
import { AppModule } from './../../app.module';
import { waitForAsync, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { ShowComponent } from './show.component';
import { of } from 'rxjs/internal/observable/of';

describe('ShowComponent', () => {
  let component: ShowComponent;
  let fixture: ComponentFixture<ShowComponent>;
  let showService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShowComponent],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(inject([SpotifyShowService], s => {
    showService = s;
    fixture = TestBed.createComponent(ShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all info from artist', () => {
    const responseShow: SpotifyApi.ShowObjectSimplified = {
      "available_markets": ["AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA"],
      "copyrights": [],
      "description": "Candid conversations with entrepreneurs, artists, athletes, visionaries of all kinds—about their successes, and their failures, and what they learned from both. Hosted by Alex Blumberg, from Gimlet Media.",
      "explicit": true,
      "external_urls": {
        "spotify": "https://open.spotify.com/show/5CfCWKI5pZ28U0uOzXkDHe"
      },
      "href": "https://api.spotify.com/v1/shows/5CfCWKI5pZ28U0uOzXkDHe",
      "id": "5CfCWKI5pZ28U0uOzXkDHe",
      "images": [{
        "height": 640,
        "url": "https://i.scdn.co/image/12903409b9e5dd26f2a41e401cd7fcabd5164ed4",
        "width": 640
      }, {
        "height": 300,
        "url": "https://i.scdn.co/image/4f19eb7986a7c2246d713dcc46684e2187ccea4f",
        "width": 300
      }, {
        "height": 64,
        "url": "https://i.scdn.co/image/c0b072976a28792a4b451dfc7011a2176ec8cd34",
        "width": 64
      }],
      "is_externally_hosted": false,
      "languages": ["en"],
      "media_type": "audio",
      "name": "Without Fail",
      "publisher": "Gimlet",
      "type": "show",
      "uri": "spotify:show:5CfCWKI5pZ28U0uOzXkDHe"
    };
    const responseEpisodes = {
      "episodes" : [ {
    "audio_preview_url" : "https://p.scdn.co/mp3-preview/7e8f7a00f1425d495bcb992bae48a19c31342490",
    "description" : "Följ med till Riddarhuset och hör om dråpliga motiv och billiga lösningar på husets drygt 2 300 vapensköldar som nu studerats. Och hör hur stormakten Sveriges krig finansierades av Frankrike.  Skelögda ugglor och halshuggna troll är några av motiven på de drygt 2&nbsp;300 vapensköldar som hänger i Riddarhuset i Stockholm. Den svenska adelns grafiska profiler har nu hamnat under luppen när heraldikern Magnus Bäckmark som förste forskare skärskådat detta bortglömda kulturarvs estetik och historia. Vetenskapsradion Historia följer med honom till Riddarhuset för att fascineras av både vackra och tokfula motiv. Dessutom om att den svenska stormaktstiden nu måste omvärderas efter att historikern Svante Norrhem undersökt de enorma summor som Sverige erhöll av Frankrike. Under närmare 170 år var Sverige närmast en klientstat till Frankrike, där närmare 20 procent av svensk ekonomi bestod av franska subsidier. Tobias Svanelid undersöker hur förhållandet påverkade länderna och hur mycket av den svenska stormaktstiden som egentligen var fransk.",
    "duration_ms" : 2685023,
    "explicit" : false,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/episode/77o6BIVlYM3msb4MMIL1jH"
    },
    "href" : "https://api.spotify.com/v1/episodes/77o6BIVlYM3msb4MMIL1jH",
    "id" : "77o6BIVlYM3msb4MMIL1jH",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/8092469858486ff19eeefcea7ec5c17b72c9590a",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/7e921e844f4deb5a8fbdacba7abb6210357237e5",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/729df823ef7f9a6f8aaf57d532490c9aab43e0dc",
      "width" : 64
    } ],
    "is_externally_hosted" : false,
    "is_playable" : true,
    "language" : "sv",
    "name" : "Riddarnas vapensköldar under lupp",
    "release_date" : "2019-09-10",
    "release_date_precision" : "day",
    "show" : {
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "copyrights" : [ ],
      "description" : "Vi är där historien är. Ansvarig utgivare: Nina Glans",
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/show/38bS44xjbVVZ3No3ByF1dJ"
      },
      "href" : "https://api.spotify.com/v1/shows/38bS44xjbVVZ3No3ByF1dJ",
      "id" : "38bS44xjbVVZ3No3ByF1dJ",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/3c59a8b611000c8b10c8013013c3783dfb87a3bc",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/2d70c06ac70d8c6144c94cabf7f4abcf85c4b7e4",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/3dc007829bc0663c24089e46743a9f4ae15e65f8",
        "width" : 64
      } ],
      "is_externally_hosted" : false,
      "languages" : [ "sv" ],
      "media_type" : "audio",
      "name" : "Vetenskapsradion Historia",
      "publisher" : "Sveriges Radio",
      "type" : "show",
      "uri" : "spotify:show:38bS44xjbVVZ3No3ByF1dJ"
    },
    "type" : "episode",
    "uri" : "spotify:episode:77o6BIVlYM3msb4MMIL1jH"
  }, {
    "audio_preview_url" : "https://p.scdn.co/mp3-preview/83bc7f2d40e850582a4ca118b33c256358de06ff",
    "description" : "Följ med Tobias Svanelid till Sveriges äldsta tegelkyrka, till Edsleskog mitt i den dalsländska granskogen, där ett religiöst skrytbygge skulle resas över ett skändligt brott.  I Edsleskog i Dalsland gräver arkeologerna nu ut vad som en gång verkar ha varit en av Sveriges största medeltidskyrkor, och kanske också den äldsta som byggts i tegel, 1200-talets high-tech-material. Tobias Svanelid reser dit för att höra historien om den märkliga och bortglömda kyrkan som grundlades på platsen för ett prästmord och dessutom kan ha varit Skarabiskopens försök att lägga beslag på det vilda Dalsland. Dessutom om sjudagarsveckan  idag ett välkänt koncept runt hela världen, men hur gammal är egentligen veckans historia? Dick Harrison vet svaret.",
    "duration_ms" : 2685023,
    "explicit" : false,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/episode/0Q86acNRm6V9GYx55SXKwf"
    },
    "href" : "https://api.spotify.com/v1/episodes/0Q86acNRm6V9GYx55SXKwf",
    "id" : "0Q86acNRm6V9GYx55SXKwf",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/b2398424d6158a21fe8677e2de5f6f3d1dc4a04f",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/a52780a1d7e1bc42619413c3dea7042396c87f49",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/88e21be860cf11f0b95ee8dfb47ddb08a13319a7",
      "width" : 64
    } ],
    "is_externally_hosted" : false,
    "is_playable" : true,
    "language" : "sv",
    "name" : "Okända katedralen i Dalsland",
    "release_date" : "2019-09-03",
    "release_date_precision" : "day",
    "show" : {
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "copyrights" : [ ],
      "description" : "Vi är där historien är. Ansvarig utgivare: Nina Glans",
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/show/38bS44xjbVVZ3No3ByF1dJ"
      },
      "href" : "https://api.spotify.com/v1/shows/38bS44xjbVVZ3No3ByF1dJ",
      "id" : "38bS44xjbVVZ3No3ByF1dJ",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/3c59a8b611000c8b10c8013013c3783dfb87a3bc",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/2d70c06ac70d8c6144c94cabf7f4abcf85c4b7e4",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/3dc007829bc0663c24089e46743a9f4ae15e65f8",
        "width" : 64
      } ],
      "is_externally_hosted" : false,
      "languages" : [ "sv" ],
      "media_type" : "audio",
      "name" : "Vetenskapsradion Historia",
      "publisher" : "Sveriges Radio",
      "type" : "show",
      "uri" : "spotify:show:38bS44xjbVVZ3No3ByF1dJ"
    },
    "type" : "episode",
    "uri" : "spotify:episode:0Q86acNRm6V9GYx55SXKwf"
  } ]
    };

    spyOn(showService, 'getArtist').and.returnValue(of(responseShow));
    spyOn(showService, 'getArtistTopTracks').and.returnValue(of(responseEpisodes));

    component.getAllInfoFromArtist();

    fixture.detectChanges();
    expect(component.show).toEqual(responseShow);
  });
});
