<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2"/>
<globals/>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20180902120538.1"><vh>@settings</vh>
<v t="leo.20180902120538.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20180902120538.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="leo.20180902120523.1"><vh>編輯 reveal</vh>
<v t="leo.20180902120523.2"><vh>@path ./../reveal</vh>
<v t="leo.20200818165234.1"><vh>@clean index.html</vh>
<v t="leo.20200818165301.1"><vh>html</vh>
<v t="leo.20200818165438.1"><vh>head</vh></v>
<v t="leo.20200818165413.1"><vh>body</vh>
<v t="leo.20200818170041.1"><vh>reveal div</vh>
<v t="leo.20200818170222.1"><vh>slides div</vh>
<v t="leo.20200818170328.1"><vh>slide 1</vh></v>
<v t="leo.20200818170535.1"><vh>slide 2</vh></v>
<v t="leo.20200818170636.1"><vh>slide3</vh>
<v t="leo.20200818170909.1"><vh>slide 3-1</vh></v>
<v t="leo.20200818170953.1"><vh>slide 3-2</vh></v>
<v t="leo.20200818171010.1"><vh>slide 3-3</vh></v>
</v>
<v t="leo.20200818170725.1"><vh>slide 4</vh></v>
<v t="leo.20200818171138.1"><vh>slide 5 </vh></v>
<v t="leo.20200818171215.1"><vh>slide 6</vh></v>
<v t="leo.20200818171244.1"><vh>slide 7 </vh></v>
<v t="leo.20200818171312.1"><vh>slide 8</vh></v>
<v t="leo.20200818171344.1"><vh>slide 9</vh></v>
<v t="leo.20200818171412.1"><vh>slide 10</vh></v>
<v t="leo.20200818194721.1"><vh>slide 11</vh></v>
<v t="leo.20200818194751.1"><vh>slide 12</vh></v>
<v t="leo.20200818194812.1"><vh>slide 13</vh>
<v t="leo.20200818194908.1"><vh>slide 13-1</vh></v>
<v t="leo.20200818194933.1"><vh>slide 13-2</vh></v>
</v>
<v t="leo.20200818194840.1"><vh>slide 14</vh></v>
<v t="leo.20200818195039.1"><vh>slide 15</vh></v>
<v t="leo.20200818195105.1"><vh>slide 16</vh>
<v t="leo.20200818195213.1"><vh>slide 16-1</vh></v>
<v t="leo.20200818195237.1"><vh>slide 16-2</vh></v>
<v t="leo.20200818195305.1"><vh>slide 16-3</vh></v>
<v t="leo.20200818195323.1"><vh>slide 16-4</vh></v>
<v t="leo.20200818195339.1"><vh>slide 16-5</vh></v>
</v>
<v t="leo.20200818195147.1"><vh>slide 17</vh></v>
<v t="leo.20200818195403.1"><vh>slide 18</vh></v>
<v t="leo.20200818195426.1"><vh>slide 19</vh></v>
<v t="leo.20200818195445.1"><vh>slide 20</vh></v>
<v t="leo.20200818195502.1"><vh>slide 21</vh></v>
<v t="leo.20200818195520.1"><vh>slide 22</vh></v>
<v t="leo.20200818195541.1"><vh>slide 23</vh></v>
<v t="leo.20200818195604.1"><vh>slide 24</vh></v>
<v t="leo.20200818195625.1"><vh>slide 25</vh></v>
<v t="leo.20200818195643.1"><vh>slide 26</vh></v>
<v t="leo.20200818195701.1"><vh>slide 27</vh></v>
<v t="leo.20200818195715.1"><vh>slide 28</vh></v>
<v t="leo.20200818195731.1"><vh>slide 29</vh></v>
<v t="leo.20200818195748.1"><vh>slide 30</vh></v>
<v t="leo.20200818195800.1"><vh>slide 31</vh></v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="leo.20180902120523.1"></t>
<t tx="leo.20180902120523.2"></t>
<t tx="leo.20180902120538.1"></t>
<t tx="leo.20180902120538.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20180902120538.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20200818165234.1">@language xml
@tabwidth -4
@others
</t>
<t tx="leo.20200818165301.1">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
@others
&lt;/html&gt;
</t>
<t tx="leo.20200818165413.1">&lt;body&gt;
@others
    &lt;script src="dist/reveal.js"&gt;&lt;/script&gt;
    &lt;script src="plugin/zoom/zoom.js"&gt;&lt;/script&gt;
    &lt;script src="plugin/notes/notes.js"&gt;&lt;/script&gt;
    &lt;script src="plugin/search/search.js"&gt;&lt;/script&gt;
    &lt;script src="plugin/markdown/markdown.js"&gt;&lt;/script&gt;
    &lt;script src="plugin/highlight/highlight.js"&gt;&lt;/script&gt;
    &lt;script&gt;

        // Also available as an ES module, see:
        // https://revealjs.com/initialization/
        Reveal.initialize({
            controls: true,
            progress: true,
            center: true,
            hash: true,

            // Learn about plugins: https://revealjs.com/plugins/
            plugins: [ RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight ]
        });

    &lt;/script&gt;
&lt;/body&gt;
</t>
<t tx="leo.20200818165438.1">&lt;head&gt;
    &lt;meta charset="utf-8"&gt;

    &lt;title&gt;reveal.js – The HTML Presentation Framework&lt;/title&gt;

    &lt;meta name="description" content="A framework for easily creating beautiful presentations using HTML"&gt;
    &lt;meta name="author" content="Hakim El Hattab"&gt;

    &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
    &lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;

    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

    &lt;link rel="stylesheet" href="dist/reset.css"&gt;
    &lt;link rel="stylesheet" href="dist/reveal.css"&gt;
    &lt;link rel="stylesheet" href="dist/theme/black.css" id="theme"&gt;

    &lt;!-- Theme used for syntax highlighting of code --&gt;
    &lt;link rel="stylesheet" href="plugin/highlight/monokai.css" id="highlight-theme"&gt;
&lt;/head&gt;
</t>
<t tx="leo.20200818170041.1">&lt;div class="reveal"&gt;
    @others
&lt;/div&gt;
</t>
<t tx="leo.20200818170222.1">&lt;!-- Any section element inside of this container is displayed as a slide --&gt;
&lt;div class="slides"&gt;
    @others
&lt;/div&gt;
</t>
<t tx="leo.20200818170328.1">&lt;section&gt;
&lt;h2&gt;w1&lt;/h2&gt;
    &lt;p&gt;
    &lt;p&gt;組員:40823129&amp;nbsp; 姓名:汪昱呈 網站:&lt;a href="https://40823129.github.io/cd2021/"&gt;40823129&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;組員:40823149&amp;nbsp; 姓名:趙偉辰 網站:&lt;a href="https://40823149.github.io/cd2021/"&gt;40823149&lt;/a&gt;&lt;/p&gt;
</t>
<t tx="leo.20200818170535.1"></t>
<t tx="leo.20200818170636.1">ll
&lt;!-- Example of nested vertical slides --&gt;
&lt;section&gt;
    @others
&lt;/section&gt;
&lt;!-- Example of nested vertical slides --&gt;
</t>
<t tx="leo.20200818170725.1">&lt;section&gt;
 &lt;h2&gt;w3&lt;/h2&gt;
    &lt;p&gt;
      &lt;br&gt;
    &lt;a href="#" class="navigate-down"&gt;
        &lt;img class="r-frame" style="background: rgba(255,255,255,0.1);" width="178" height="238" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"&gt;
    &lt;/a&gt;
</t>
<t tx="leo.20200818170909.1">&lt;section&gt;
 &lt;h2&gt;w2&lt;/h2&gt;
    &lt;p&gt;
      &lt;br&gt;
    &lt;a href="#" class="navigate-down"&gt;
        &lt;img class="r-frame" style="background: rgba(255,255,255,0.1);" width="178" height="238" data-src="https://static.slid.es/reveal/arrow.png" alt="Down arrow"&gt;
    &lt;/a&gt;
    &lt;/p&gt;
&lt;/section&gt;
</t>
<t tx="leo.20200818170953.1">&lt;section&gt;
 &lt;h2&gt;主題討論&lt;/h2&gt;
    &lt;p&gt;
&lt;p&gt;&lt;strong&gt;迴轉壽司 設計動機 在各式各樣的列車當中，我們最後選擇迴轉壽司列車來作為我們此次的專題題目，而我們認為這是所有列車當中最有特色的，因為這是一個一部能在餐桌上跑的的列車，所以我們開始上網搜尋資料，迴轉壽司的外型和它的作動原理，以下是我們的參考圖片。&lt;/strong&gt;&lt;/p&gt;
</t>
<t tx="leo.20200818171010.1">    &lt;/p&gt;
&lt;/section&gt;
</t>
<t tx="leo.20200818171138.1"></t>
<t tx="leo.20200818171215.1"></t>
<t tx="leo.20200818171244.1"></t>
<t tx="leo.20200818171312.1"></t>
<t tx="leo.20200818171344.1"></t>
<t tx="leo.20200818171412.1"></t>
<t tx="leo.20200818194721.1"></t>
<t tx="leo.20200818194751.1"></t>
<t tx="leo.20200818194812.1">     @others
</t>
<t tx="leo.20200818194840.1"></t>
<t tx="leo.20200818194908.1"></t>
<t tx="leo.20200818194933.1"></t>
<t tx="leo.20200818195039.1">    &lt;/p&gt;
&lt;/section&gt;
</t>
<t tx="leo.20200818195105.1">&lt;section&gt;
    @others
</t>
<t tx="leo.20200818195147.1">    &lt;p&gt;
&lt;p&gt;&lt;strong&gt;藉由這次的模擬來檢驗列車的作動與干涉的問題&lt;/strong&gt;&lt;/p&gt;
    &lt;/p&gt;&lt;p&gt;&lt;iframe width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/vl0rSFS3-yY"&gt;&lt;/iframe&gt;&lt;/p&gt;
</t>
<t tx="leo.20200818195213.1">         &lt;h2&gt;COPPELIASIM REVISE&lt;/h2&gt;
</t>
<t tx="leo.20200818195237.1"></t>
<t tx="leo.20200818195305.1"></t>
<t tx="leo.20200818195323.1"></t>
<t tx="leo.20200818195339.1"></t>
<t tx="leo.20200818195403.1"></t>
<t tx="leo.20200818195426.1"></t>
<t tx="leo.20200818195445.1"></t>
<t tx="leo.20200818195502.1"></t>
<t tx="leo.20200818195520.1">&lt;/section&gt;
</t>
<t tx="leo.20200818195541.1">&lt;section&gt;
 &lt;h2&gt;COPPELIASIM REVISE&lt;/h2&gt;
    &lt;p&gt;
&lt;p&gt;&lt;strong&gt;第二次測試發現輪子與軌道之接觸面干涉導致無法前進&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;&lt;iframe width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/Y1028OuOMis"&gt;&lt;/iframe&gt;&lt;/p&gt;
&lt;/section&gt;
</t>
<t tx="leo.20200818195604.1">&lt;section&gt;
 &lt;h2&gt;COPPELIASIM REVISE&lt;/h2&gt;
    &lt;p&gt;
&lt;p&gt;&lt;strong&gt;經過上次的模擬再重新設計輪子的格式但還是無法成功模擬&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;&lt;iframe width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/bbxsoK3pewI"&gt;&lt;/iframe&gt;&lt;/p&gt;
</t>
<t tx="leo.20200818195625.1">&lt;/section&gt;
</t>
<t tx="leo.20200818195643.1">&lt;section&gt;
 &lt;h2&gt;COPPELIASIM REVISE&lt;/h2&gt;
    &lt;p&gt;
&lt;p&gt;&lt;strong&gt;接合處容易斷裂&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;&lt;iframe width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/-coEvkexIoo"&gt;&lt;/iframe&gt;&lt;/p&gt;
&lt;/section&gt;
</t>
<t tx="leo.20200818195701.1">&lt;section&gt;
 &lt;h2&gt;COPPELIASIM REVISE&lt;/h2&gt;
    &lt;p&gt;
&lt;p&gt;&lt;strong&gt;車輪馬達無法一起作動，容易脫落&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;&lt;iframe width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/ruPTvzIudak"&gt;&lt;/iframe&gt;&lt;/p&gt;
&lt;/section&gt;
&lt;section&gt;
</t>
<t tx="leo.20200818195715.1"> &lt;h2&gt;COPPELIASIM REVISE&lt;/h2&gt;
    &lt;p&gt;
&lt;p&gt;&lt;strong&gt;三四節車廂無法相接怎麼配合都無法連接&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;&lt;iframe width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/XAn4HYchu20"&gt;&lt;/iframe&gt;&lt;/p&gt;
&lt;/p&gt;
</t>
<t tx="leo.20200818195731.1"></t>
<t tx="leo.20200818195748.1"></t>
<t tx="leo.20200818195800.1">&lt;/section&gt;
</t>
</tnodes>
</leo_file>
