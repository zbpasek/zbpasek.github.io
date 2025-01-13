// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-granty",
          title: "Granty",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/granty/";
          },
        },{id: "nav-publikacje",
          title: "Publikacje",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publikacje/";
          },
        },{id: "nav-publikacje",
          title: "Publikacje",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publikacje/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "grants-etos-górniczy-w-20-lat-po-zamknięciu-kopalń",
          title: 'Etos górniczy w 20 lat po zamknięciu kopalń',
          description: "Grant rektora AGH dla Koła Naukowego Kulturoznawców (opieka merytoryczna i realizacja badań terenowych w Wałbrzychu)",
          section: "Grants",handler: () => {
              window.location.href = "/grants/etos-gorniczy-w-20-lat-po-zamknieciu-kopaln/";
            },},{id: "grants-kulturowe-aspekty-strategii-promocyjnych-wałbrzycha",
          title: 'Kulturowe aspekty strategii promocyjnych Wałbrzycha',
          description: "Grant rektora AGH dla Koła Naukowego Kulturoznawców (opieka merytoryczna i realizacja badań terenowych)",
          section: "Grants",handler: () => {
              window.location.href = "/grants/kulturowe-aspekty-strategii-promocyjnych-walbrzycha/";
            },},{id: "grants-kulturowe-determinanty-postaw-proekologicznych-na-przykładzie-wisły",
          title: 'Kulturowe determinanty postaw proekologicznych na przykładzie Wisły',
          description: "Grant rektora AGH dla Kulturoznawczego Koła Naukowego (opieka merytoryczna i realizacja badań terenowych)",
          section: "Grants",handler: () => {
              window.location.href = "/grants/kulturowe-determinanty-postaw-proekologicznych-na-przykladzie-wisly/";
            },},{id: "grants-mistycyzm-pentekostalny-w-polsce",
          title: 'Mistycyzm pentekostalny w Polsce',
          description: "Grant promotorski Narodowego Centrum Nauki (dr Andrzej Migda)",
          section: "Grants",handler: () => {
              window.location.href = "/grants/mistycyzm-pentekostalny-w-polsce/";
            },},{id: "grants-skarb-jako-szansa-na-wyjście-z-szybu",
          title: 'Skarb jako szansa na wyjście z szybu',
          description: "Grant rektora AGH dla Koła Naukowego Kulturoznawców (opieka merytoryczna i realizacja badań terenowych w Wałbrzychu)",
          section: "Grants",handler: () => {
              window.location.href = "/grants/skarb-jako-szansa-na-wyjscie-z-szybu/";
            },},{id: "grants-wspólnoty-religijne-wisły",
          title: 'Wspólnoty religijne Wisły',
          description: "Grant badawczy i wydawniczy Rady Miasta Wisły",
          section: "Grants",handler: () => {
              window.location.href = "/grants/wspolnoty-religijne-wisly/";
            },},{id: "grants-zabytki-w-krajobrazie-kulturowym-powiatu-wałbrzyskiego",
          title: 'Zabytki w krajobrazie kulturowym powiatu wałbrzyskiego',
          description: "Grant rektora AGH dla Kulturoznawczego Koła Naukowego (opieka merytoryczna i realizacja badań terenowych)",
          section: "Grants",handler: () => {
              window.location.href = "/grants/zabytki-w-krajobrazie-kulturowym-powiatu-walbrzyskiego/";
            },},{id: "publications-artykuły-w-czasopismach-100",
          title: 'Artykuły W Czasopismach 100',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-100/";
            },},{id: "publications-artykuły-w-czasopismach-101",
          title: 'Artykuły W Czasopismach 101',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-101/";
            },},{id: "publications-artykuły-w-czasopismach-102",
          title: 'Artykuły W Czasopismach 102',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-102/";
            },},{id: "publications-artykuły-w-czasopismach-103",
          title: 'Artykuły W Czasopismach 103',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-103/";
            },},{id: "publications-artykuły-w-czasopismach-104",
          title: 'Artykuły W Czasopismach 104',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-104/";
            },},{id: "publications-artykuły-w-czasopismach-105",
          title: 'Artykuły W Czasopismach 105',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-105/";
            },},{id: "publications-artykuły-w-czasopismach-106",
          title: 'Artykuły W Czasopismach 106',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-106/";
            },},{id: "publications-artykuły-w-czasopismach-107",
          title: 'Artykuły W Czasopismach 107',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-107/";
            },},{id: "publications-artykuły-w-czasopismach-108",
          title: 'Artykuły W Czasopismach 108',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-108/";
            },},{id: "publications-artykuły-w-czasopismach-109",
          title: 'Artykuły W Czasopismach 109',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-109/";
            },},{id: "publications-artykuły-w-czasopismach-110",
          title: 'Artykuły W Czasopismach 110',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-110/";
            },},{id: "publications-artykuły-w-czasopismach-111",
          title: 'Artykuły W Czasopismach 111',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-111/";
            },},{id: "publications-artykuły-w-czasopismach-112",
          title: 'Artykuły W Czasopismach 112',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-112/";
            },},{id: "publications-artykuły-w-czasopismach-113",
          title: 'Artykuły W Czasopismach 113',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-113/";
            },},{id: "publications-artykuły-w-czasopismach-114",
          title: 'Artykuły W Czasopismach 114',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-114/";
            },},{id: "publications-artykuły-w-czasopismach-115",
          title: 'Artykuły W Czasopismach 115',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-115/";
            },},{id: "publications-artykuły-w-czasopismach-116",
          title: 'Artykuły W Czasopismach 116',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-116/";
            },},{id: "publications-artykuły-w-czasopismach-117",
          title: 'Artykuły W Czasopismach 117',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-117/";
            },},{id: "publications-artykuły-w-czasopismach-118",
          title: 'Artykuły W Czasopismach 118',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-118/";
            },},{id: "publications-artykuły-w-czasopismach-119",
          title: 'Artykuły W Czasopismach 119',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-119/";
            },},{id: "publications-artykuły-w-czasopismach-120",
          title: 'Artykuły W Czasopismach 120',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-120/";
            },},{id: "publications-artykuły-w-czasopismach-121",
          title: 'Artykuły W Czasopismach 121',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-121/";
            },},{id: "publications-artykuły-w-czasopismach-122",
          title: 'Artykuły W Czasopismach 122',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-122/";
            },},{id: "publications-artykuły-w-czasopismach-123",
          title: 'Artykuły W Czasopismach 123',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-123/";
            },},{id: "publications-artykuły-w-czasopismach-124",
          title: 'Artykuły W Czasopismach 124',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-124/";
            },},{id: "publications-artykuły-w-czasopismach-125",
          title: 'Artykuły W Czasopismach 125',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-125/";
            },},{id: "publications-artykuły-w-czasopismach-126",
          title: 'Artykuły W Czasopismach 126',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-126/";
            },},{id: "publications-artykuły-w-czasopismach-127",
          title: 'Artykuły W Czasopismach 127',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-127/";
            },},{id: "publications-artykuły-w-czasopismach-128",
          title: 'Artykuły W Czasopismach 128',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-128/";
            },},{id: "publications-artykuły-w-czasopismach-129",
          title: 'Artykuły W Czasopismach 129',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-129/";
            },},{id: "publications-artykuły-w-czasopismach-130",
          title: 'Artykuły W Czasopismach 130',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-130/";
            },},{id: "publications-artykuły-w-czasopismach-131",
          title: 'Artykuły W Czasopismach 131',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-131/";
            },},{id: "publications-artykuły-w-czasopismach-94",
          title: 'Artykuły W Czasopismach 94',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-94/";
            },},{id: "publications-artykuły-w-czasopismach-95",
          title: 'Artykuły W Czasopismach 95',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-95/";
            },},{id: "publications-artykuły-w-czasopismach-96",
          title: 'Artykuły W Czasopismach 96',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-96/";
            },},{id: "publications-artykuły-w-czasopismach-97",
          title: 'Artykuły W Czasopismach 97',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-97/";
            },},{id: "publications-artykuły-w-czasopismach-98",
          title: 'Artykuły W Czasopismach 98',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-98/";
            },},{id: "publications-artykuły-w-czasopismach-99",
          title: 'Artykuły W Czasopismach 99',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/artyku%C5%82y-w-czasopismach-99/";
            },},{id: "publications-fragmenty-książek-26",
          title: 'Fragmenty Książek 26',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-26/";
            },},{id: "publications-fragmenty-książek-27",
          title: 'Fragmenty Książek 27',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-27/";
            },},{id: "publications-fragmenty-książek-28",
          title: 'Fragmenty Książek 28',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-28/";
            },},{id: "publications-fragmenty-książek-29",
          title: 'Fragmenty Książek 29',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-29/";
            },},{id: "publications-fragmenty-książek-30",
          title: 'Fragmenty Książek 30',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-30/";
            },},{id: "publications-fragmenty-książek-31",
          title: 'Fragmenty Książek 31',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-31/";
            },},{id: "publications-fragmenty-książek-32",
          title: 'Fragmenty Książek 32',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-32/";
            },},{id: "publications-fragmenty-książek-33",
          title: 'Fragmenty Książek 33',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-33/";
            },},{id: "publications-fragmenty-książek-34",
          title: 'Fragmenty Książek 34',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-34/";
            },},{id: "publications-fragmenty-książek-35",
          title: 'Fragmenty Książek 35',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-35/";
            },},{id: "publications-fragmenty-książek-36",
          title: 'Fragmenty Książek 36',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-36/";
            },},{id: "publications-fragmenty-książek-37",
          title: 'Fragmenty Książek 37',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-37/";
            },},{id: "publications-fragmenty-książek-38",
          title: 'Fragmenty Książek 38',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-38/";
            },},{id: "publications-fragmenty-książek-39",
          title: 'Fragmenty Książek 39',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-39/";
            },},{id: "publications-fragmenty-książek-40",
          title: 'Fragmenty Książek 40',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-40/";
            },},{id: "publications-fragmenty-książek-41",
          title: 'Fragmenty Książek 41',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-41/";
            },},{id: "publications-fragmenty-książek-42",
          title: 'Fragmenty Książek 42',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-42/";
            },},{id: "publications-fragmenty-książek-43",
          title: 'Fragmenty Książek 43',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-43/";
            },},{id: "publications-fragmenty-książek-44",
          title: 'Fragmenty Książek 44',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-44/";
            },},{id: "publications-fragmenty-książek-45",
          title: 'Fragmenty Książek 45',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-45/";
            },},{id: "publications-fragmenty-książek-46",
          title: 'Fragmenty Książek 46',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-46/";
            },},{id: "publications-fragmenty-książek-47",
          title: 'Fragmenty Książek 47',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-47/";
            },},{id: "publications-fragmenty-książek-48",
          title: 'Fragmenty Książek 48',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-48/";
            },},{id: "publications-fragmenty-książek-49",
          title: 'Fragmenty Książek 49',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-49/";
            },},{id: "publications-fragmenty-książek-50",
          title: 'Fragmenty Książek 50',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-50/";
            },},{id: "publications-fragmenty-książek-51",
          title: 'Fragmenty Książek 51',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-51/";
            },},{id: "publications-fragmenty-książek-52",
          title: 'Fragmenty Książek 52',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-52/";
            },},{id: "publications-fragmenty-książek-53",
          title: 'Fragmenty Książek 53',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-53/";
            },},{id: "publications-fragmenty-książek-54",
          title: 'Fragmenty Książek 54',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-54/";
            },},{id: "publications-fragmenty-książek-55",
          title: 'Fragmenty Książek 55',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-55/";
            },},{id: "publications-fragmenty-książek-56",
          title: 'Fragmenty Książek 56',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-56/";
            },},{id: "publications-fragmenty-książek-57",
          title: 'Fragmenty Książek 57',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-57/";
            },},{id: "publications-fragmenty-książek-58",
          title: 'Fragmenty Książek 58',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-58/";
            },},{id: "publications-fragmenty-książek-59",
          title: 'Fragmenty Książek 59',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-59/";
            },},{id: "publications-fragmenty-książek-60",
          title: 'Fragmenty Książek 60',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-60/";
            },},{id: "publications-fragmenty-książek-61",
          title: 'Fragmenty Książek 61',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-61/";
            },},{id: "publications-fragmenty-książek-62",
          title: 'Fragmenty Książek 62',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-62/";
            },},{id: "publications-fragmenty-książek-63",
          title: 'Fragmenty Książek 63',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-63/";
            },},{id: "publications-fragmenty-książek-64",
          title: 'Fragmenty Książek 64',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-64/";
            },},{id: "publications-fragmenty-książek-65",
          title: 'Fragmenty Książek 65',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-65/";
            },},{id: "publications-fragmenty-książek-66",
          title: 'Fragmenty Książek 66',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-66/";
            },},{id: "publications-fragmenty-książek-67",
          title: 'Fragmenty Książek 67',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-67/";
            },},{id: "publications-fragmenty-książek-68",
          title: 'Fragmenty Książek 68',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-68/";
            },},{id: "publications-fragmenty-książek-69",
          title: 'Fragmenty Książek 69',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-69/";
            },},{id: "publications-fragmenty-książek-70",
          title: 'Fragmenty Książek 70',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-70/";
            },},{id: "publications-fragmenty-książek-71",
          title: 'Fragmenty Książek 71',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-71/";
            },},{id: "publications-fragmenty-książek-72",
          title: 'Fragmenty Książek 72',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-72/";
            },},{id: "publications-fragmenty-książek-73",
          title: 'Fragmenty Książek 73',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-73/";
            },},{id: "publications-fragmenty-książek-74",
          title: 'Fragmenty Książek 74',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-74/";
            },},{id: "publications-fragmenty-książek-75",
          title: 'Fragmenty Książek 75',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-75/";
            },},{id: "publications-fragmenty-książek-76",
          title: 'Fragmenty Książek 76',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-76/";
            },},{id: "publications-fragmenty-książek-77",
          title: 'Fragmenty Książek 77',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-77/";
            },},{id: "publications-fragmenty-książek-78",
          title: 'Fragmenty Książek 78',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-78/";
            },},{id: "publications-fragmenty-książek-79",
          title: 'Fragmenty Książek 79',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-79/";
            },},{id: "publications-fragmenty-książek-80",
          title: 'Fragmenty Książek 80',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-80/";
            },},{id: "publications-fragmenty-książek-81",
          title: 'Fragmenty Książek 81',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-81/";
            },},{id: "publications-fragmenty-książek-82",
          title: 'Fragmenty Książek 82',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-82/";
            },},{id: "publications-fragmenty-książek-83",
          title: 'Fragmenty Książek 83',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-83/";
            },},{id: "publications-fragmenty-książek-84",
          title: 'Fragmenty Książek 84',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-84/";
            },},{id: "publications-fragmenty-książek-85",
          title: 'Fragmenty Książek 85',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-85/";
            },},{id: "publications-fragmenty-książek-86",
          title: 'Fragmenty Książek 86',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-86/";
            },},{id: "publications-fragmenty-książek-87",
          title: 'Fragmenty Książek 87',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-87/";
            },},{id: "publications-fragmenty-książek-88",
          title: 'Fragmenty Książek 88',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-88/";
            },},{id: "publications-fragmenty-książek-89",
          title: 'Fragmenty Książek 89',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-89/";
            },},{id: "publications-fragmenty-książek-90",
          title: 'Fragmenty Książek 90',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-90/";
            },},{id: "publications-fragmenty-książek-91",
          title: 'Fragmenty Książek 91',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-91/";
            },},{id: "publications-fragmenty-książek-92",
          title: 'Fragmenty Książek 92',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-92/";
            },},{id: "publications-fragmenty-książek-93",
          title: 'Fragmenty Książek 93',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/fragmenty-ksi%C4%85%C5%BCek-93/";
            },},{id: "publications-hasła-w-słownikach-i-encyklopediach-132",
          title: 'Hasła W Słownikach I Encyklopediach 132',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/has%C5%82a-w-s%C5%82ownikach-i-encyklopediach-132/";
            },},{id: "publications-hasła-w-słownikach-i-encyklopediach-133",
          title: 'Hasła W Słownikach I Encyklopediach 133',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/has%C5%82a-w-s%C5%82ownikach-i-encyklopediach-133/";
            },},{id: "publications-hasła-w-słownikach-i-encyklopediach-134",
          title: 'Hasła W Słownikach I Encyklopediach 134',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/has%C5%82a-w-s%C5%82ownikach-i-encyklopediach-134/";
            },},{id: "publications-książki-1",
          title: 'Książki 1',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/ksi%C4%85%C5%BCki-1/";
            },},{id: "publications-książki-10",
          title: 'Książki 10',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/ksi%C4%85%C5%BCki-10/";
            },},{id: "publications-książki-2",
          title: 'Książki 2',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/ksi%C4%85%C5%BCki-2/";
            },},{id: "publications-książki-3",
          title: 'Książki 3',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/ksi%C4%85%C5%BCki-3/";
            },},{id: "publications-książki-4",
          title: 'Książki 4',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/ksi%C4%85%C5%BCki-4/";
            },},{id: "publications-książki-5",
          title: 'Książki 5',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/ksi%C4%85%C5%BCki-5/";
            },},{id: "publications-książki-6",
          title: 'Książki 6',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/ksi%C4%85%C5%BCki-6/";
            },},{id: "publications-książki-7",
          title: 'Książki 7',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/ksi%C4%85%C5%BCki-7/";
            },},{id: "publications-książki-8",
          title: 'Książki 8',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/ksi%C4%85%C5%BCki-8/";
            },},{id: "publications-książki-9",
          title: 'Książki 9',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/ksi%C4%85%C5%BCki-9/";
            },},{id: "publications-recenzje-135",
          title: 'Recenzje 135',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-135/";
            },},{id: "publications-recenzje-136",
          title: 'Recenzje 136',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-136/";
            },},{id: "publications-recenzje-137",
          title: 'Recenzje 137',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-137/";
            },},{id: "publications-recenzje-138",
          title: 'Recenzje 138',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-138/";
            },},{id: "publications-recenzje-139",
          title: 'Recenzje 139',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-139/";
            },},{id: "publications-recenzje-140",
          title: 'Recenzje 140',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-140/";
            },},{id: "publications-recenzje-141",
          title: 'Recenzje 141',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-141/";
            },},{id: "publications-recenzje-142",
          title: 'Recenzje 142',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-142/";
            },},{id: "publications-recenzje-143",
          title: 'Recenzje 143',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-143/";
            },},{id: "publications-recenzje-144",
          title: 'Recenzje 144',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-144/";
            },},{id: "publications-recenzje-145",
          title: 'Recenzje 145',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-145/";
            },},{id: "publications-recenzje-146",
          title: 'Recenzje 146',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-146/";
            },},{id: "publications-recenzje-147",
          title: 'Recenzje 147',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-147/";
            },},{id: "publications-recenzje-148",
          title: 'Recenzje 148',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-148/";
            },},{id: "publications-recenzje-149",
          title: 'Recenzje 149',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-149/";
            },},{id: "publications-recenzje-150",
          title: 'Recenzje 150',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-150/";
            },},{id: "publications-recenzje-151",
          title: 'Recenzje 151',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-151/";
            },},{id: "publications-recenzje-152",
          title: 'Recenzje 152',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-152/";
            },},{id: "publications-recenzje-153",
          title: 'Recenzje 153',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-153/";
            },},{id: "publications-recenzje-154",
          title: 'Recenzje 154',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-154/";
            },},{id: "publications-recenzje-155",
          title: 'Recenzje 155',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-155/";
            },},{id: "publications-recenzje-156",
          title: 'Recenzje 156',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-156/";
            },},{id: "publications-recenzje-157",
          title: 'Recenzje 157',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-157/";
            },},{id: "publications-recenzje-158",
          title: 'Recenzje 158',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-158/";
            },},{id: "publications-recenzje-159",
          title: 'Recenzje 159',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/recenzje-159/";
            },},{id: "publications-redaktor-prac-zbiorowych-11",
          title: 'Redaktor Prac Zbiorowych 11',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-11/";
            },},{id: "publications-redaktor-prac-zbiorowych-12",
          title: 'Redaktor Prac Zbiorowych 12',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-12/";
            },},{id: "publications-redaktor-prac-zbiorowych-13",
          title: 'Redaktor Prac Zbiorowych 13',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-13/";
            },},{id: "publications-redaktor-prac-zbiorowych-14",
          title: 'Redaktor Prac Zbiorowych 14',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-14/";
            },},{id: "publications-redaktor-prac-zbiorowych-15",
          title: 'Redaktor Prac Zbiorowych 15',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-15/";
            },},{id: "publications-redaktor-prac-zbiorowych-16",
          title: 'Redaktor Prac Zbiorowych 16',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-16/";
            },},{id: "publications-redaktor-prac-zbiorowych-17",
          title: 'Redaktor Prac Zbiorowych 17',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-17/";
            },},{id: "publications-redaktor-prac-zbiorowych-18",
          title: 'Redaktor Prac Zbiorowych 18',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-18/";
            },},{id: "publications-redaktor-prac-zbiorowych-19",
          title: 'Redaktor Prac Zbiorowych 19',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-19/";
            },},{id: "publications-redaktor-prac-zbiorowych-20",
          title: 'Redaktor Prac Zbiorowych 20',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-20/";
            },},{id: "publications-redaktor-prac-zbiorowych-21",
          title: 'Redaktor Prac Zbiorowych 21',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-21/";
            },},{id: "publications-redaktor-prac-zbiorowych-22",
          title: 'Redaktor Prac Zbiorowych 22',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-22/";
            },},{id: "publications-redaktor-prac-zbiorowych-23",
          title: 'Redaktor Prac Zbiorowych 23',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-23/";
            },},{id: "publications-redaktor-prac-zbiorowych-24",
          title: 'Redaktor Prac Zbiorowych 24',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-24/";
            },},{id: "publications-redaktor-prac-zbiorowych-25",
          title: 'Redaktor Prac Zbiorowych 25',
          description: "",
          section: "Publications",handler: () => {
              window.location.href = "/publications/redaktor-prac-zbiorowych-25/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%62%69%67%6E%69%65%77_%70%61%73%65%6B@%6F%32.%70%6C", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-2580-4366", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=pgf9lt4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
