var tipuesearch = {"pages": [{'title': 'stage1-7', 'text': '', 'tags': '', 'url': 'stage1-7.html'}, {'title': '小組-1', 'text': '組員:40823129\xa0 姓名:汪昱呈 網站: 40823129 \n 組員:40823149\xa0 姓名:趙偉辰 網站: 40823149 \n 小組倉儲 \n', 'tags': '', 'url': '小組-1.html'}, {'title': 'w1', 'text': '\n \n \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '\n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '\n \n \n \n \n \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'stage2-7', 'text': '', 'tags': '', 'url': 'stage2-7.html'}, {'title': '小組-2', 'text': '組員:40823129\xa0 姓名:汪昱呈 網站: 40823129 \xa0(機械設計) \n 組員:40823149\xa0 姓名:趙偉辰 網站: 40823149 (機械設計) \n 組員:40823122\xa0 姓名:吳家凱 網站: 40823122 (coppeliasim模擬) \n 組員:40823117\xa0 姓名:潘奕丞 網站: 40823117(coppeliasim模擬) \n stage2-7 \n', 'tags': '', 'url': '小組-2.html'}, {'title': 'w5', 'text': '\n \n \n \n     \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6~w7', 'text': '將solidwork修改成inventor \n \n \n \n \n', 'tags': '', 'url': 'w6~w7.html'}, {'title': 'stage3-6', 'text': '', 'tags': '', 'url': 'stage3-6.html'}, {'title': '小組-3', 'text': '組員:40823129\xa0 姓名:汪昱呈 網站: 40823129 \n 組員:40823149\xa0 姓名:趙偉辰 網站: 4082314 \n 組員:40823122\xa0 姓名:吳家凱 網站: 40823122 \n 組員:40823117\xa0 姓名:潘奕丞 網站: 40823117 \n 組員:40823110\xa0 姓名:張昀棨網站: 40823110 \n 組員:40823152\xa0 姓名:黃暐翰 網站: 40823152 \n 組員:40823153\xa0 姓名:蕭日傑 網站: 40823153 \n 組員:40823125\xa0 姓名:楊子賢 網站: 40823125 \n', 'tags': '', 'url': '小組-3.html'}, {'title': 'w10', 'text': '\n', 'tags': '', 'url': 'w10.html'}, {'title': 'task1', 'text': '參考40823131和40823136 \n # open file, default is read mode, since txt content no chinese char\n#打開文件，默認為讀取模式，因為txt內容無中文字符\n# no encoding = "UTF-8" is needed\n#無需編碼=“ UTF-8”\nwith open("stage3_2a.txt") as ab: \n    #開啟檔案stage3_2a.txt並命名為ab\n    data = ab.readlines()\n    #將ab=stage3_2a.txt的資料讀取檔案，使用readline()讀取檔案中所有內容或是從檔案中讀取一行資料\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n    #有一組學號錯誤更換( replace) 成新的學號\n    #這字串replace (\'4823122\',40823122\')命名為data,然後for-loop到data中修改\n    #40823122修該成4823122\n    data = [b.replace(\'\\t\\t\',\'\') for b in data]\n      #因為有一組有六個人比別組少2個人,把四個空格刪除\n      #(\\t\\t代表一個人)\n     #print(data)\nprint(len(data))\n#說明有幾個元素\nfor i in range(len(data)):\n    #假設一個範圍len(data)=6,變數為自行假設(i),從0開始加到5,一直循環，每次加1 [0,1,2,3,4,5]\n    group = data[i].rstrip("\\n").split("\\t") \n    #data[0]=\'stage3_ag1\\t...\',data[1]=\'stage3_ag2\\t...\',.......\n    #先取出data list中的第i項進行處理,刪去元素中\\n ,再利用\\t進行切割，找出新的列表group\n    #[rstrip(\\n)=刪除字符串中結尾處，位於\\n刪除序列的符號][split()=通過指定分隔符對字串進行切片]\n    print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">Website</a> | <a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">Repository</a></p>\')\n    #group[0]=組名\n    #group[0][9]=取得組序\n    #將 group list(串列)中的元素,將網站跟倉儲依序印出來 \n    for j in range(2,18,2):\n        #設一個範圍,以2為起始每次加2加到<18，就是執行迴圈8次\n        try:\n            print(\'<p>\'+group[j]+\' | Website:\'+\'<a href="https://\'+group[j]+\'.github.io/cd2021\'+\'">\'+group[j]+\'</a>\'+\' | Repository:\'+\'<a href="https://github.com/\'+group[j]+\'/cd2021\'+\'">\'+group[j]+\'</a> </p>\')\n          #group[j]=組員學號，j=2時學號為組長\n          #將 group list(串列)中的元素,將網站跟倉儲依序印出來        \n        except:\n          continue\n           #for 迴圈會將range都跑完，所以要執行到最後一次才會跳出循環\n           #這邊使用try.....except,因為有一組6個人,如果沒用會出現error out of range(超出範圍),最後用continue是要讓迴圈繼續跑 \n \n stage3_ag1 |  Website  |  Repository \n 40823131 | Website: 40823131  | Repository: 40823131 \n a40823112 | Website: a40823112  | Repository: a40823112 \n 40823123 | Website: 40823123  | Repository: 40823123 \n 40823145 | Website: 40823145  | Repository: 40823145 \n 40823136 | Website: 40823136  | Repository: 40823136 \n 40823109 | Website: 40823109  | Repository: 40823109 \n 40823116 | Website: 40823116  | Repository: 40823116 \n 40823108 | Website: 40823108  | Repository: 40823108 \n stage3_ag2 |  Website  |  Repository \n 40823151 | Website: 40823151  | Repository: 40823151 \n 40623121 | Website: 40623121  | Repository: 40623121 \n 40871106 | Website: 40871106  | Repository: 40871106 \n 40823102 | Website: 40823102  | Repository: 40823102 \n 40823104 | Website: 40823104  | Repository: 40823104 \n 40823106 | Website: 40823106  | Repository: 40823106 \n 40823101 | Website: 40823101  | Repository: 40823101 \n 40823132 | Website: 40823132  | Repository: 40823132 \n stage3_ag3 |  Website  |  Repository \n 40823119 | Website: 40823119  | Repository: 40823119 \n 40823150 | Website: 40823150  | Repository: 40823150 \n 40823103 | Website: 40823103  | Repository: 40823103 \n 40823107 | Website: 40823107  | Repository: 40823107 \n 40523252 | Website: 40523252  | Repository: 40523252 \n 40823154 | Website: 40823154  | Repository: 40823154 \n stage3_ag4 |  Website  |  Repository \n 40823142 | Website: 40823142  | Repository: 40823142 \n 40823144 | Website: 40823144  | Repository: 40823144 \n 40823127 | Website: 40823127  | Repository: 40823127 \n 40823148 | Website: 40823148  | Repository: 40823148 \n 40823121 | Website: 40823121  | Repository: 40823121 \n 40823135 | Website: 40823135  | Repository: 40823135 \n 40823114 | Website: 40823114  | Repository: 40823114 \n 40823146 | Website: 40823146  | Repository: 40823146 \n stage3_ag5 |  Website  |  Repository \n 40823111 | Website: 40823111  | Repository: 40823111 \n 40823115 | Website: 40823115  | Repository: 40823115 \n 40823128 | Website: 40823128  | Repository: 40823128 \n 40823120 | Website: 40823120  | Repository: 40823120 \n 40823140 | Website: 40823140  | Repository: 40823140 \n 40823124 | Website: 40823124  | Repository: 40823124 \n 40823139 | Website: 40823139  | Repository: 40823139 \n 40823126 | Website: 40823126  | Repository: 40823126 \n stage3_ag6 |  Website  |  Repository \n 40823152 | Website: 40823152  | Repository: 40823152 \n 40823110 | Website: 40823110  | Repository: 40823110 \n 40823122 | Website: 40823122  | Repository: 40823122 \n 40823125 | Website: 40823125  | Repository: 40823125 \n 40823117 | Website: 40823117  | Repository: 40823117 \n 40823129 | Website: 40823129  | Repository: 40823129 \n 40823149 | Website: 40823149  | Repository: 40823149 \n 40823153 | Website: 40823153  | Repository: 40823153 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '下載coppeliasim 4.2.0 版本\xa0 4.2.0 版 . \n \n 下載\xa0 http://mde.tw/cad2020/downloads/coppeliasim/vrep_remoteapi_ex.7z \xa0 \n \n 將remoteApi.dll / sim.py /simComst.py 複製島bubble 資料夾當中 \n \n 將 bubblerote_remoteApi.py 拉進小白框當中 \n \n 修改內容\xa0 { 將import vrep修改為 import sim as vrep} \n \n 在小白框按 Tools/go \n 在進入coppeliasim 叫出小車 進行操作 \n \n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'w11\xa0 \xa0Task2', 'text': '', 'tags': '', 'url': 'w11\xa0 \xa0Task2.html'}, {'title': 'stage1-6 remote API', 'text': '因為stage1-6的檔案會炸裂，所以無法進行API得模擬程序。 \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'stage1-6 remote API.html'}, {'title': 'stage2-7 remote API', 'text': "function sysCall_init()\n    corout=coroutine.create(coroutineMain)\nend\n\nfunction sysCall_actuation()\n    if coroutine.status(corout)~='dead' then\n        local ok,errorMsg=coroutine.resume(corout)\n        if errorMsg then\n            error(debug.traceback(corout,errorMsg),2)\n        end\n    end\nend\n\nfunction sysCall_cleanup()\n    -- do some clean-up here\nend\n\nfunction coroutineMain()\n    -- Put some initialization code here\n\n\n    -- Put your main loop here, e.g.:\n    --\n    -- while true do\n    --     local p=sim.getObjectPosition(objHandle,-1)\n    --     p[1]=p[1]+0.001\n    --     sim.setObjectPosition(objHandle,-1,p)\n    --     sim.switchThread() -- resume in next simulation step\n    -- end\nend\n\n-- See the user manual or the available code snippets for additional callback functions and details\n-- Put some initialization code here:\nsim.setThreadSwitchTiming(2) -- Default timing for automatic thread switching\n\n-- Here we execute the regular thread code:\nres,err=xpcall(threadFunction,function(err) return debug.traceback(err) end)\nif not res then\n\tsim.addStatusbarMessage('Lua runtime error: '..err)\nend\n\n-- Put some clean-up code here:\nsimRemoteApi.start(19999)\n \n \n \n", 'tags': '', 'url': 'stage2-7 remote API.html'}, {'title': 'w13', 'text': '小組meeting討路分組項目，各自去尋找分配到的工作資料。 \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': 'gitlab', 'text': '1.先用gitlab創新倉儲，與github倉儲相同的名稱 \n \n \n 2.去edit profile的ssh介面，加入ssh \n \n \n \n 3.在倉儲禮打git remote add gitlab 網址，把url改成ssh的語法後git push gitlab \n 4.cd2021\xa0.gitlab-ci.yml這個檔案去到老師的倉儲下載檔案 \n 5.cd2021:把master改成main，存在倉儲底下 \n \n 6.git add /git commit /git push 與gitlab 就好 \n 7.到setting pages看就有網頁了(5/27 以前都能免費使用) \n \n \n', 'tags': '', 'url': 'gitlab.html'}, {'title': '六軸機械臂模型', 'text': '', 'tags': '', 'url': '六軸機械臂模型.html'}, {'title': 'w15', 'text': '', 'tags': '', 'url': 'w15.html'}, {'title': 'Video and subtitle translation-1', 'text': '\n Title: Inverse kinematics for a 2-joint robot arm using geometry \n 標題：使用幾何學的 2 關節機器人手臂的逆運動學。 We saw this simple two-link robot in the previous lecture about forward kinematics \n 我們在上一堂關於正向運動學的講座中看到了這個簡單的雙連桿機器人。 \n The tooltip pose of this robot is described simply by two numbers, the coordinates x and y with respect to the world coordinate frame. \n 該機器人的工具提示姿態由兩個數字簡單描述，即相對於世界坐標系的坐標 x 和 y。 So,the problem hwre us that given x and y.we want to determine the joined angles,Q1 and q2. \n 所以，給我們 x 和 y 的問題是我們想要確定連接角 Q1 和 q2。 The solution that we’re going to follow in this particular section is a geometric one. \n 我們將在本節中遵循的解決方案是幾何解決方案。 We’re going to start with a simple piece of construction. \n 我們將從一個簡單的結構開始。 \n We’re going to overlay the red triangle on top of our robot. \n 我們將在機構上覆蓋紅色三角形。 \n We know that the end point coordinate is x, y, so the vertical height of the triangle is y, the horizontal width is x and, using Pythagoras theorem, we can write r squared equals x squared plus y squared. \n 我們知道終點坐標是x，y，所以三角形的垂直高度是y，水平寬度是x，使用畢達哥拉斯定理，我們可以寫出r的平方等於x的平方加上y的平方。 \n So far,so easy \n 到目前為止，如此簡單 。 Now, w’re going to look at this triangle highlighted here in red and we want to determine the angle alpha. \n 現在，我們將查看此處以紅色突出顯示的三角形，我們要確定角度 alpha。 \n In order to do that, we need to use the cosine rule. \n 為了做到這一點，我們需要使用餘弦規則。 \n And, if you’re a little rusty on the cosine rule, here is a bit of a refresher. \n 而且，如果你對余弦規則有點生疏，這裡有一點複習。 We have an arbitrary triangle. \n 我們有一個任意三角形。 \n We don’t have any right angles in it and we’re going to label the length of this edge as A and the angle opposite that edge, we’re going to label as little a 我們沒有任何直角，我們將這條邊的長度標記為 A，而該邊的對面角，我們將標記為 a。 And, we do the same for this edge and this angle, and this edge and this angle,So, all together, the sides are labelled capitals A, B and C, and the angles are labelled little a, little b, and little c \n 並且，我們對這條邊和這個角做同樣的事情，這條邊和這個角，所以，所有的邊都被標記為大寫的A、B和C，而這些角被標記為小a、小b和小c 。 \n So, the cosine rule is simply this relationship here.It’s a bit like Pythagoras’ theorem except for this extra term on the end with the cos a in it. 所以，餘弦定理就是這種關係。 它有點像畢氏定理，除了末尾有 cos a 的這個額外項。 \n Now, let’s apply the cosine rule to the particular triangle we looked at a moment ago \n 現在，讓我們將餘弦規則應用於我們剛才看到的特定三角形 。 \n It’s pretty straightforward to write down this particular relationship. \n 寫下這種特殊關係非常簡單。 \n We can isolate the term cos alpha which gives us the angle alpha that we’re interested in. \n 我們可以分離出術語 cos alpha，它給出了我們感興趣的角度 alpha。 \n And, it’s defined in terms of the constant link lengths, A1 and A2 and the position of the end effector, x and y. \n 而且，它是根據恆定連桿長度 A1 和 A2 以及末端執行器的位置 x 和 y 定義的。 \n We can write this simple relationship between the angles alpha and Q2 \n 我們可以寫出角度 alpha 和 Q2 之間的這種簡單關係 。 \n And, we know from the shape of the cosine function that cos of q2 must be equal to negative of cos alpha \n 並且，我們從餘弦函數的形狀知道 q2 的 cos 必須等於 cos alpha 的負數 。 This time, let’s just write an expression for the cosine of the joined angle q2 \n 這一次，我們只寫一個關於連接角 q2 的餘弦的表達式 。 \n Now, we’re going to draw yet another red triangle and we’re going apply some simple trigonometry here \n 現在，我們將繪製另一個紅色三角形，並在此處應用一些簡單的三角函數 。 If we know Q2, then we know this length and this length of the red triangle \n 如果我們知道 Q2，那麼我們就知道這個長度和這個紅色三角形的長度 。 \n We can write this relationship for the sine of the joined angle q2 \n 我們可以為連接角 Q2 的正弦寫出這種關係 。 \n Now, we can consider this bigger triangle whose angle is beta and this side length of this triangle is given here in blue \n 現在，我們可以考慮這個更大的三角形，它的角是β，這個三角形的邊長在這裡用藍色給出 。 \n And, the length of the other side of the triangle is this 而且，三角形的另一邊的長度是這個。 So, now we can write an expression for the angle beta in terms of these parameters here 所以，現在我們可以在此處根據這些參數編寫角度 beta 的表達式 。 \n Going back to the red triangle that we drew earlier, we can establish a relationship between q1 and the angle beta 回到我們之前畫的紅色三角形，我們可以建立 Q1 和角度 beta 之間的關係。 Introduce yet another angle, this one gamma and we can write a relationship between the angle gamma and the tooltip coordinates x and y 引入另一個角度，這個ɣ，我們可以寫出角度ɣ和工具提示坐標 x 和 y 之間的關係。 Now, we can write a simple relationship between the angles that we’ve constructed, gamma and beta and the joined angle we’re interested in which is q1 現在，我們可以在我們構建的角度 ɣ 和 β與我們感興趣的連接角度 Q1 之間寫出一個簡單的關係 。 \n And, the total relationship looks something like this 而且，整個關係看起來像這樣 。 \n Quite a complex relationship, it gives us the angle of joined one, that’s q1 in terms of the end effector coordinates y and x, and a bunch of constants, a1 and a2, and it’s also a function of the second joint angle, Q2 \n 一個相當複雜的關係，它給了我們連接的角度，即末端執行器坐標 y 和 x 的 q1，以及一堆常數 a1 和 a2，它也是第二個關節角度 Q2 的函數。 \n So, let’s summarize what it is that we have derived here \n 所以，總結我們在這裡得出什麼。 \n We have an expression for the cosine of Q2 and we have an expression for Q1 \n 我們有 Q2 的餘弦表達方程式和 Q1 的表達方程式 \n Now, the cosine function is symmetrical about 0 \n \n 現在，餘弦函數在0對稱 \n \n So, if we know the value of the cosine of Q2, then there are two possible solutions a positive angle and a negative angle. \n \n 所以我們知道cos\xa0 Q2的值可能為正角和負角。 \n We’re going to explicitly choose the positive angle. Which means that I can write this expression here. \n 我們選擇正角，表示我可以寫出此表達式。 \n And now, we have what we call the inverse kinematic solution for this two-link robot. \n 現在我們能用逆向運動學來解決雙連桿機構。 \n We have an expression for the two joined angles, Q1 and Q2 in terms of the end effector pose x and y, and a bunch of constants. \n 我們有兩個角 Q1 和 Q2 的表達式，根據最終執行的x 和 y 以及一系列常數。 \n You notice that the two equations are not independent \n 你注意到這兩個方程不是獨立的。 \n The equation for Q1, in fact, depends on the solution for Q2 \n \n 實際上，Q1 的方程取決於 Q2 的解。 \n \n In this case, Q2 is negative and we’re going to write the solution for Q2 with a negative sign in front of the inverse cosine \n 在這種情況下，Q2 是負數，我們將用負號在反餘弦前寫出 Q2 的解。 \n \n Now, we need to solve for Q1, so we’re going to introduce this particular red triangle, the angle beta that we solved previously, and the angle gamma which is defined in terms of y and x \n 現在，我們需要求解 Q1，因此我們將介紹這個特定的紅色三角形、我們之前求解的β角，以及根據 y 和 x 定義的ɣ角。 \n \n Now, we write a slightly different relationship between q1, gamma and beta, different to what we had before \n \n 現在，我們在 q1、ɣ 和 β之間寫出略有不同的關係，與我們之前的不同。 \n \n There’s a change of sign involved \n \n 這涉及符號的變化。 \n \n Then, we can substitute all that previous equation and come up with this expression for Q1 \n \n 然後，我們可以替換之前的所有等式並得出 Q1 的這個表達式。 \n \n Again, there is a change of sign here \n 同樣，這裡的符號發生了變化。 \n Previously, this was a negative sign \n 先前，這是個負號。 \n And, here in summary form is the solution for the inverse kinematics of our two-link robot when it is in this particular configuration, where Q2 is negative \n 並且，這裡總結的形式是我們的雙連桿機構在這種特定配置下的逆向運動學的解決方案，其中 Q2 為負。 \n Let’s compare the two solutions, the case where q2 is positive and the case where q2 is negative. \n 讓我們比較兩個解決方案，Q2為正和Q2為負的情況。 \n \n \n \n', 'tags': '', 'url': 'Video and subtitle translation-1.html'}, {'title': 'Video and subtitle translation-2', 'text': "\n title:Inverse kinematics for a 2-joint robot arm using algebra \n 標題:用逆向運動學對2連桿機構手臂使用代數。 \n Here we have the same two link robot as we just looked at but this time we're going tosolve it using an analytical approach , that is we're going to rely much more on algebra ,particular linear algebra rather than geometry \n 在這裡，我們有剛剛看到的相同的兩個連桿機構，但這次我們將使用分析方法來解決它，也就是說，我們將更多地依賴代數，特別是線性代數而不是幾何 。 \n We have an expression E , which is the homogeneous transformation which represents the pose of the robots endefector and we looked at this in the last lecture , we can write the endefector pose as a sequence of elementary homogeneous transformations \n 我們有一個表達式 E ，它是表示機器人最終位姿的齊次變換，我們在上一課中看過這個，我們可以將最終位姿寫為一系列基本齊次變換 。 \n A rotation by Q1 , a translation along the X direction by A1 , a rotation by Q2 and then a translation in the X direction by A2 \n Q1 旋轉，A1 沿 X 方向平移，Q2 旋轉，然後 A2 沿 X 方向平移 。 \n If I expand this out , multiply all the transformations together , I get the expression shown here ; a three by three homogeneous transformation matrix representing the pose of the robot's endefector \n 如果我將其展開，將所有變換相乘，就會得到此處所示的表達式；一個三乘三的齊次變換矩陣，表示機器人的最終的姿態 。 \n Now for this particular two link robot , we are only interested in the position of its endefector , it's X and Y co - ordinate and they are these two elements within the homogeneous transformation matrix , so I'm going to copy those out\xa0 \n 現在對於這個特殊的雙連桿機器人，我們只對它的最終的位置感興趣，它是 X 和 Y 坐標，它們是齊次變換矩陣中的這兩個元素，所以我將把它們複製出來 。 \n So here again is our expression for X and Y and what we're going to do is a fairly common trick , we're going to square and add these two equations and I get a relationship that looks like this . \n 所以這裡又是我們對 X 和 Y 的表達式，我們要做的是一個相當常見的技巧，我們要將它平方並將這兩個方程相加，我得到一個看起來像這樣的關係式。 \n Now I can solve for the joint angle Q2 in terms of the endefector pose X and Y and the robot's constants A1 and A2. \n 現在我可以根據最終位置X和Y以及機械手臂的常數A1及A2來求出關節角度Q2。 \n Now what I'm going to do is apply the sum of angles identity . \n 現在我要做的是應用角度之和的特性 。 \n 'm going to expand these terms, sine of Q1 plus Q2 or cos of Q1 plus Q2 and to make life a little bit easier, I'm going to make some substations, so where ever I had cos Q2, I'm going to write C2 and where ever I had sine Q2, I'm going to write S2. \n 我將展開這些項，Q1 的正弦加 Q2 或 Q1 的餘弦加 Q2，為了更輕鬆一點，我將建立一些分部，所以只要有 cos Q2，我會將其取代為C2並且在有正弦Q2的地方，我會將其取代為S2 。 \n It's a fairly common shorthand when people are looking at robot kinematic equations \n 當人們解決機械手臂運動學方程式時，這是一個相當常見的快速記法 。 \n And here are the equations after making those substitutions \n 這是進行替換後的方程式 \n Looking at these two equations, I can see that they fall into a very well known form and for that form there is a very well known solution. \n 看看這兩個方程式，我可以看到它們屬於一個眾所周知的形式，對於這種形式，有一個淺顯易見的解決方案 。 \n So I'm going to consider just one of the equations, the equation for Y and using our well known identity and it's solution, I can determine the values for the variables little a, little b and little c and once l've determined those, then I can just write down the solution for Q1, which x is the equivalent of theta in this particular case \n 所以我將只考慮其中一個方程，Y 的方程，並使用我們眾所周知的恆等式和它的解，我可以確定變量小 a、小 b 和小 c 的值，一旦我確定了這些，然後我可以寫下 Q1 的解決方案，在這種特殊情況下，x 相當於 theta 。 \n Here again is our expression for Q1, copied over from the previous slide and we may remember from earlier in our workings that we determined this particular relationship; X squared plus Y squared is equal to this particular complex expression \n 這裡再次是我們對 Q1 的表達，從上一張幻燈片複製過來，我們可能還記得在我們早期的說明中，確定了這種特殊關係； X 平方加 Y 平方等於這個特定的複雜表達式 。 \n So I can substitute that in and do some simplification and I end up with this slightly less complex expression for Q1 \n 因此，我可以將其替換並進行一些簡化，最終得到 Q1 的這個稍微不那麼複雜的表達式 。 \n And it is the same expression that I got following the geometric approach in the previous section. \n 這與我在上一節中遵循幾何方法求出的表達式一模一樣 。 \n", 'tags': '', 'url': 'Video and subtitle translation-2.html'}, {'title': 'w16', 'text': '', 'tags': '', 'url': 'w16.html'}]};