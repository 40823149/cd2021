var tipuesearch = {"pages": [{'title': 'stage1-7', 'text': '', 'tags': '', 'url': 'stage1-7.html'}, {'title': '小組-1', 'text': '組員:40823129\xa0 姓名:汪昱呈 網站: 40823129 \n 組員:40823149\xa0 姓名:趙偉辰 網站: 40823149 \n 小組倉儲 \n', 'tags': '', 'url': '小組-1.html'}, {'title': 'w1', 'text': '\n \n \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '\n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '\n \n \n \n \n \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'stage2-7', 'text': '', 'tags': '', 'url': 'stage2-7.html'}, {'title': '小組-2', 'text': '組員:40823129\xa0 姓名:汪昱呈 網站: 40823129 \xa0(機械設計) \n 組員:40823149\xa0 姓名:趙偉辰 網站: 40823149 (機械設計) \n 組員:40823122\xa0 姓名:吳家凱 網站: 40823122 (coppeliasim模擬) \n 組員:40823117\xa0 姓名:潘奕丞 網站: 40823117(coppeliasim模擬) \n stage2-7 \n', 'tags': '', 'url': '小組-2.html'}, {'title': 'w5', 'text': '\n \n \n \n     \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6~w7', 'text': '將solidwork修改成inventor \n \n \n \n \n', 'tags': '', 'url': 'w6~w7.html'}, {'title': 'stage3-6', 'text': '', 'tags': '', 'url': 'stage3-6.html'}, {'title': '小組-3', 'text': '組員:40823129\xa0 姓名:汪昱呈 網站: 40823129 \n 組員:40823149\xa0 姓名:趙偉辰 網站: 4082314 \n 組員:40823122\xa0 姓名:吳家凱 網站: 40823122 \n 組員:40823117\xa0 姓名:潘奕丞 網站: 40823117 \n 組員:40823110\xa0 姓名:張昀棨網站: 40823110 \n 組員:40823152\xa0 姓名:黃暐翰 網站: 40823152 \n 組員:40823153\xa0 姓名:蕭日傑 網站: 40823153 \n 組員:40823125\xa0 姓名:楊子賢 網站: 40823125 \n', 'tags': '', 'url': '小組-3.html'}, {'title': 'w10', 'text': '\n', 'tags': '', 'url': 'w10.html'}, {'title': 'task1', 'text': '參考40823131和40823136 \n # open file, default is read mode, since txt content no chinese char\n#打開文件，默認為讀取模式，因為txt內容無中文字符\n# no encoding = "UTF-8" is needed\n#無需編碼=“ UTF-8”\nwith open("stage3_2a.txt") as ab: \n    #開啟檔案stage3_2a.txt並命名為ab\n    data = ab.readlines()\n    #將ab=stage3_2a.txt的資料讀取檔案，使用readline()讀取檔案中所有內容或是從檔案中讀取一行資料\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n    #有一組學號錯誤更換( replace) 成新的學號\n    #這字串replace (\'4823122\',40823122\')命名為data,然後for-loop到data中修改\n    #40823122修該成4823122\n    data = [b.replace(\'\\t\\t\',\'\') for b in data]\n      #因為有一組有六個人比別組少2個人,把四個空格刪除\n      #(\\t\\t代表一個人)\n     #print(data)\nprint(len(data))\n#說明有幾個元素\nfor i in range(len(data)):\n    #假設一個範圍len(data)=6,變數為自行假設(i),從0開始加到5,一直循環，每次加1 [0,1,2,3,4,5]\n    group = data[i].rstrip("\\n").split("\\t") \n    #data[0]=\'stage3_ag1\\t...\',data[1]=\'stage3_ag2\\t...\',.......\n    #先取出data list中的第i項進行處理,刪去元素中\\n ,再利用\\t進行切割，找出新的列表group\n    #[rstrip(\\n)=刪除字符串中結尾處，位於\\n刪除序列的符號][split()=通過指定分隔符對字串進行切片]\n    print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">Website</a> | <a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">Repository</a></p>\')\n    #group[0]=組名\n    #group[0][9]=取得組序\n    #將 group list(串列)中的元素,將網站跟倉儲依序印出來 \n    for j in range(2,18,2):\n        #設一個範圍,以2為起始每次加2加到<18，就是執行迴圈8次\n        try:\n            print(\'<p>\'+group[j]+\' | Website:\'+\'<a href="https://\'+group[j]+\'.github.io/cd2021\'+\'">\'+group[j]+\'</a>\'+\' | Repository:\'+\'<a href="https://github.com/\'+group[j]+\'/cd2021\'+\'">\'+group[j]+\'</a> </p>\')\n          #group[j]=組員學號，j=2時學號為組長\n          #將 group list(串列)中的元素,將網站跟倉儲依序印出來        \n        except:\n          continue\n           #for 迴圈會將range都跑完，所以要執行到最後一次才會跳出循環\n           #這邊使用try.....except,因為有一組6個人,如果沒用會出現error out of range(超出範圍),最後用continue是要讓迴圈繼續跑 \n \n stage3_ag1 |  Website  |  Repository \n 40823131 | Website: 40823131  | Repository: 40823131 \n a40823112 | Website: a40823112  | Repository: a40823112 \n 40823123 | Website: 40823123  | Repository: 40823123 \n 40823145 | Website: 40823145  | Repository: 40823145 \n 40823136 | Website: 40823136  | Repository: 40823136 \n 40823109 | Website: 40823109  | Repository: 40823109 \n 40823116 | Website: 40823116  | Repository: 40823116 \n 40823108 | Website: 40823108  | Repository: 40823108 \n stage3_ag2 |  Website  |  Repository \n 40823151 | Website: 40823151  | Repository: 40823151 \n 40623121 | Website: 40623121  | Repository: 40623121 \n 40871106 | Website: 40871106  | Repository: 40871106 \n 40823102 | Website: 40823102  | Repository: 40823102 \n 40823104 | Website: 40823104  | Repository: 40823104 \n 40823106 | Website: 40823106  | Repository: 40823106 \n 40823101 | Website: 40823101  | Repository: 40823101 \n 40823132 | Website: 40823132  | Repository: 40823132 \n stage3_ag3 |  Website  |  Repository \n 40823119 | Website: 40823119  | Repository: 40823119 \n 40823150 | Website: 40823150  | Repository: 40823150 \n 40823103 | Website: 40823103  | Repository: 40823103 \n 40823107 | Website: 40823107  | Repository: 40823107 \n 40523252 | Website: 40523252  | Repository: 40523252 \n 40823154 | Website: 40823154  | Repository: 40823154 \n stage3_ag4 |  Website  |  Repository \n 40823142 | Website: 40823142  | Repository: 40823142 \n 40823144 | Website: 40823144  | Repository: 40823144 \n 40823127 | Website: 40823127  | Repository: 40823127 \n 40823148 | Website: 40823148  | Repository: 40823148 \n 40823121 | Website: 40823121  | Repository: 40823121 \n 40823135 | Website: 40823135  | Repository: 40823135 \n 40823114 | Website: 40823114  | Repository: 40823114 \n 40823146 | Website: 40823146  | Repository: 40823146 \n stage3_ag5 |  Website  |  Repository \n 40823111 | Website: 40823111  | Repository: 40823111 \n 40823115 | Website: 40823115  | Repository: 40823115 \n 40823128 | Website: 40823128  | Repository: 40823128 \n 40823120 | Website: 40823120  | Repository: 40823120 \n 40823140 | Website: 40823140  | Repository: 40823140 \n 40823124 | Website: 40823124  | Repository: 40823124 \n 40823139 | Website: 40823139  | Repository: 40823139 \n 40823126 | Website: 40823126  | Repository: 40823126 \n stage3_ag6 |  Website  |  Repository \n 40823152 | Website: 40823152  | Repository: 40823152 \n 40823110 | Website: 40823110  | Repository: 40823110 \n 40823122 | Website: 40823122  | Repository: 40823122 \n 40823125 | Website: 40823125  | Repository: 40823125 \n 40823117 | Website: 40823117  | Repository: 40823117 \n 40823129 | Website: 40823129  | Repository: 40823129 \n 40823149 | Website: 40823149  | Repository: 40823149 \n 40823153 | Website: 40823153  | Repository: 40823153', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '下載coppeliasim 4.2.0 版本\xa0 4.2.0 版 . \n \n 下載\xa0 http://mde.tw/cad2020/downloads/coppeliasim/vrep_remoteapi_ex.7z \xa0 \n \n 將remoteApi.dll / sim.py /simComst.py 複製島bubble 資料夾當中 \n \n 將 bubblerote_remoteApi.py 拉進小白框當中 \n \n 修改內容\xa0 { 將import vrep修改為 import sim as vrep} \n \n 在小白框按 Tools/go \n 在進入coppeliasim 叫出小車 進行操作 \n \n', 'tags': '', 'url': 'task2.html'}]};