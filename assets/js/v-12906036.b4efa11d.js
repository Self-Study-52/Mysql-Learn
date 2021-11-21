"use strict";(self.webpackChunkMysql_Learn=self.webpackChunkMysql_Learn||[]).push([[59],{9273:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-12906036",path:"/guide/%E3%80%8A%E9%AB%98%E6%80%A7%E8%83%BDMysql%E3%80%8B/%E9%99%84%E5%BD%95C-Mysql%E7%9A%84Explain%E8%AF%A6%E8%A7%A3.html",title:"Mysql的Explain详解",lang:"en-US",frontmatter:{title:"Mysql的Explain详解",lang:"en-US"},excerpt:"",headers:[{level:2,title:"字段特性",slug:"字段特性",children:[]},{level:2,title:"坏境准备",slug:"坏境准备",children:[]},{level:2,title:"explain 之 id",slug:"explain-之-id",children:[]},{level:2,title:"explain 之 select_type",slug:"explain-之-select-type",children:[]},{level:2,title:"explain 之 table",slug:"explain-之-table",children:[]},{level:2,title:"explain 之 type",slug:"explain-之-type",children:[]}],filePathRelative:"guide/《高性能Mysql》/附录C-Mysql的Explain详解.md",git:{updatedTime:1637486257e3,contributors:[{name:"Sue-52",email:"1219243947@qq.com",commits:1}]}}},9893:(e,n,s)=>{s.r(n),s.d(n,{default:()=>l});const a=(0,s(6252).uE)('<h1 id="附录b-mysql的explain详解" tabindex="-1"><a class="header-anchor" href="#附录b-mysql的explain详解" aria-hidden="true">#</a> 附录B-Mysql的Explain详解</h1><h2 id="字段特性" tabindex="-1"><a class="header-anchor" href="#字段特性" aria-hidden="true">#</a> 字段特性</h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">id</td><td style="text-align:center;">select查询的序列号，是一组数字，表示的是查询中执行select子句或者是操作表的顺序。</td></tr><tr><td style="text-align:center;">select_type</td><td style="text-align:center;">表示 SELECT 的类型，常见的取值有 SIMPLE（简单表，即不使用表连接或者子查询）、PRIMARY（主查询，即外层的查询）、UNION（UNION 中的第二个或者后面的查询语句）、SUBQUERY（子查询中的第一个 SELECT）等</td></tr><tr><td style="text-align:center;">table</td><td style="text-align:center;">输出结果集的表</td></tr><tr><td style="text-align:center;">type</td><td style="text-align:center;">表示表的连接类型，性能由好到差的连接类型为( system ---&gt; const -----&gt; eq_ref ------&gt; ref -------&gt; ref_or_null----&gt; index_merge ---&gt; index_subquery -----&gt; range -----&gt; index ------&gt; all )</td></tr><tr><td style="text-align:center;">possible_keys</td><td style="text-align:center;">表示查询时，可能使用的索引</td></tr><tr><td style="text-align:center;">key</td><td style="text-align:center;">表示实际使用的索引</td></tr><tr><td style="text-align:center;">key_len</td><td style="text-align:center;">索引字段的长度</td></tr><tr><td style="text-align:center;">rows</td><td style="text-align:center;">扫描行的数量</td></tr><tr><td style="text-align:center;">extra</td><td style="text-align:center;">执行情况的说明和描述</td></tr></tbody></table><h2 id="坏境准备" tabindex="-1"><a class="header-anchor" href="#坏境准备" aria-hidden="true">#</a> 坏境准备</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE `t_role` (\n  `id` varchar(32) NOT NULL,\n  `role_name` varchar(255) DEFAULT NULL,\n  `role_code` varchar(255) DEFAULT NULL,\n  `description` varchar(255) DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `unique_role_name` (`role_name`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nCREATE TABLE `t_user` (\n  `id` varchar(32) NOT NULL,\n  `username` varchar(45) NOT NULL,\n  `password` varchar(96) NOT NULL,\n  `name` varchar(45) NOT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `unique_user_username` (`username`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nCREATE TABLE `user_role` (\n  `id` int(11) NOT NULL auto_increment ,\n  `user_id` varchar(32) DEFAULT NULL,\n  `role_id` varchar(32) DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  KEY `fk_ur_user_id` (`user_id`),\n  KEY `fk_ur_role_id` (`role_id`),\n  CONSTRAINT `fk_ur_role_id` FOREIGN KEY (`role_id`) REFERENCES `t_role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,\n  CONSTRAINT `fk_ur_user_id` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\n\n\ninsert into `t_user` (`id`, `username`, `password`, `name`) values(&#39;1&#39;,&#39;super&#39;,&#39;$2a$10$TJ4TmCdK.X4wv/tCqHW14.w70U3CC33CeVncD3SLmyMXMknstqKRe&#39;,&#39;超级管理员&#39;);\ninsert into `t_user` (`id`, `username`, `password`, `name`) values(&#39;2&#39;,&#39;admin&#39;,&#39;$2a$10$TJ4TmCdK.X4wv/tCqHW14.w70U3CC33CeVncD3SLmyMXMknstqKRe&#39;,&#39;系统管理员&#39;);\ninsert into `t_user` (`id`, `username`, `password`, `name`) values(&#39;3&#39;,&#39;itcast&#39;,&#39;$2a$10$8qmaHgUFUAmPR5pOuWhYWOr291WJYjHelUlYn07k5ELF8ZCrW0Cui&#39;,&#39;test02&#39;);\ninsert into `t_user` (`id`, `username`, `password`, `name`) values(&#39;4&#39;,&#39;stu1&#39;,&#39;$2a$10$pLtt2KDAFpwTWLjNsmTEi.oU1yOZyIn9XkziK/y/spH5rftCpUMZa&#39;,&#39;学生1&#39;);\ninsert into `t_user` (`id`, `username`, `password`, `name`) values(&#39;5&#39;,&#39;stu2&#39;,&#39;$2a$10$nxPKkYSez7uz2YQYUnwhR.z57km3yqKn3Hr/p1FR6ZKgc18u.Tvqm&#39;,&#39;学生2&#39;);\ninsert into `t_user` (`id`, `username`, `password`, `name`) values(&#39;6&#39;,&#39;t1&#39;,&#39;$2a$10$TJ4TmCdK.X4wv/tCqHW14.w70U3CC33CeVncD3SLmyMXMknstqKRe&#39;,&#39;老师1&#39;);\n\n\n\nINSERT INTO `t_role` (`id`, `role_name`, `role_code`, `description`) VALUES(&#39;5&#39;,&#39;学生&#39;,&#39;student&#39;,&#39;学生&#39;);\nINSERT INTO `t_role` (`id`, `role_name`, `role_code`, `description`) VALUES(&#39;7&#39;,&#39;老师&#39;,&#39;teacher&#39;,&#39;老师&#39;);\nINSERT INTO `t_role` (`id`, `role_name`, `role_code`, `description`) VALUES(&#39;8&#39;,&#39;教学管理员&#39;,&#39;teachmanager&#39;,&#39;教学管理员&#39;);\nINSERT INTO `t_role` (`id`, `role_name`, `role_code`, `description`) VALUES(&#39;9&#39;,&#39;管理员&#39;,&#39;admin&#39;,&#39;管理员&#39;);\nINSERT INTO `t_role` (`id`, `role_name`, `role_code`, `description`) VALUES(&#39;10&#39;,&#39;超级管理员&#39;,&#39;super&#39;,&#39;超级管理员&#39;);\n\n\nINSERT INTO user_role(id,user_id,role_id) VALUES(NULL, &#39;1&#39;, &#39;5&#39;),(NULL, &#39;1&#39;, &#39;7&#39;),(NULL, &#39;2&#39;, &#39;8&#39;),(NULL, &#39;3&#39;, &#39;9&#39;),(NULL, &#39;4&#39;, &#39;8&#39;),(NULL, &#39;5&#39;, &#39;10&#39;) ;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img//1556122799330.png" alt="1556122799330"></p><h2 id="explain-之-id" tabindex="-1"><a class="header-anchor" href="#explain-之-id" aria-hidden="true">#</a> explain 之 id</h2><p>id 字段是 select查询的序列号，是一组数字，表示的是查询中执行select子句或者是操作表的顺序。有以下三种情况：</p><p>情况一：</p><ul><li>id 相同表示加载表的顺序是从上到下</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>explain select * from t_role r,t_user u,user_role ur where r.id = ur.role_id and u.id = ur.user_id;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img//image-20211119202002481.png" alt="image-20211119202002481"></p><p>情况二：</p><ul><li>id 不同id值越大，优先级越高，越先被执行</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>explain select * from t_role where id = (\n\tselect role_id from user_role where user_id = (\n\t\tselect id from t_user where username = &#39;stu1&#39;\n\t\t)\n\t);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img//image-20211119202130344.png" alt="image-20211119202130344"></p><p>情况三：</p><ul><li>id 有相同，也有把不同，同时存在。id 相同的可以认为是一组，从上往下顺序执行；在所有的组中，id的值越大，优先级越高，越先执行。</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>explain select * from t_role r, (\n\tselect * from user_role ur where ur.user_id = &#39;2&#39;\n\t) a where r.id = a.role_id;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img//image-20211119202255695.png" alt="image-20211119202255695"></p><h2 id="explain-之-select-type" tabindex="-1"><a class="header-anchor" href="#explain-之-select-type" aria-hidden="true">#</a> explain 之 select_type</h2><p>表示 SELECT 的类型，常见的取值，如下表所示：</p><table><thead><tr><th>select_type</th><th>含义</th></tr></thead><tbody><tr><td>SIMPLE</td><td>简单的select查询，查询中不包含子查询或者UNION</td></tr><tr><td>PRIMARY</td><td>查询中若包含任何复杂的子查询，最外层查询标记为该标识</td></tr><tr><td>SUBQUERY</td><td>在SELECT 或 WHERE 列表中包含了子查询</td></tr><tr><td>DERIVED</td><td>在FROM 列表中包含的子查询，被标记为 DERIVED（衍生） MYSQL会递归执行这些子查询，把结果放在临时表中</td></tr><tr><td>UNION</td><td>若第二个SELECT出现在UNION之后，则标记为UNION ； 若UNION包含在FROM子句的子查询中，外层SELECT将被标记为 ： DERIVED</td></tr><tr><td>UNION RESULT</td><td>从UNION表获取结果的SELECT</td></tr></tbody></table><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>explain select * from t_role;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img//image-20211119202649541.png" alt="image-20211119202649541"></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>explain select * from t_role where role_name = (\n\tselect id from user_role ur where ur.role_id = 5\n\t);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img//image-20211119202744655.png" alt="image-20211119202744655"></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>explain select * from t_role r , (\n\tselect * from user_role ur where ur.user_id = 2\n) a where r.id = a.role_id\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>在 8.0 版本后 From 列表后面的子查询不会标记为： Derived</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>explain select * from t_role union select * from t_user;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img//image-20211119202902350.png" alt="image-20211119202902350"></p><h2 id="explain-之-table" tabindex="-1"><a class="header-anchor" href="#explain-之-table" aria-hidden="true">#</a> explain 之 table</h2><p>展示这一行的数据是关于哪一张表的</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>explain select role_name,username,user_id from t_role,t_user,user_role;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img//image-20211119203019840.png" alt="image-20211119203019840"></p><h2 id="explain-之-type" tabindex="-1"><a class="header-anchor" href="#explain-之-type" aria-hidden="true">#</a> explain 之 type</h2>',36),r={},l=(0,s(3744).Z)(r,[["render",function(e,n){return a}]])},3744:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}}}]);