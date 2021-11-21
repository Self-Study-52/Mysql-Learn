"use strict";(self.webpackChunkMysql_Learn=self.webpackChunkMysql_Learn||[]).push([[873],{5743:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-b2ca8484",path:"/guide/%E3%80%8AMysql%E5%BF%85%E7%9F%A5%E5%BF%85%E4%BC%9A%E3%80%8B/%E7%AC%AC%E4%BA%8C%E5%8D%81%E7%AB%A0%EF%BC%9A%E5%88%9B%E5%BB%BA%E5%92%8C%E6%93%8D%E7%BA%B5%E8%A1%A8.html",title:"第二十章：创建和操纵表",lang:"en-US",frontmatter:{title:"第二十章：创建和操纵表",lang:"en-US"},excerpt:"",headers:[{level:2,title:"创建表 CREATE TABLE",slug:"创建表-create-table",children:[]},{level:2,title:"表创建基础",slug:"表创建基础",children:[]},{level:2,title:"使用 NULL 值",slug:"使用-null-值",children:[]},{level:2,title:"主键再介绍",slug:"主键再介绍",children:[]},{level:2,title:"AUTO_INCREMENT",slug:"auto-increment",children:[]},{level:2,title:"指定默认值",slug:"指定默认值",children:[]},{level:2,title:"引擎类型",slug:"引擎类型",children:[]},{level:2,title:"更新表",slug:"更新表",children:[]},{level:2,title:"删除表",slug:"删除表",children:[]},{level:2,title:"重命名表",slug:"重命名表",children:[]}],filePathRelative:"guide/《Mysql必知必会》/第二十章：创建和操纵表.md",git:{updatedTime:1635847604e3,contributors:[{name:"Sue-52",email:"1219243947@qq.com",commits:1}]}}},5211:(e,n,s)=>{s.r(n),s.d(n,{default:()=>r});const a=(0,s(6252).uE)('<h1 id="第二十章-创建和操纵表" tabindex="-1"><a class="header-anchor" href="#第二十章-创建和操纵表" aria-hidden="true">#</a> 第二十章：创建和操纵表</h1><h2 id="创建表-create-table" tabindex="-1"><a class="header-anchor" href="#创建表-create-table" aria-hidden="true">#</a> 创建表 <code>CREATE TABLE</code></h2><p>MySQL不仅用于表数据操纵，而且还可以用来执行数据库和表的所有操作，包括表本身的创建和处理。</p><p>一般有两种创建表的方法：</p><ul><li>使用具有交互式创建和管理表的工具（如第2章讨论的工具）；</li><li>表也可以直接用MySQL语句操纵。</li></ul><p>为了用程序创建表，可使用SQL的CREATE TABLE语句。</p><h2 id="表创建基础" tabindex="-1"><a class="header-anchor" href="#表创建基础" aria-hidden="true">#</a> 表创建基础</h2><p>为利用CREATE TABLE创建表，必须给出下列信息：</p><ul><li>新表的名字，在关键字CREATE TABLE之后给出；</li><li>表列的名字和定义，用逗号分隔。</li></ul><p>CREATE TABLE语句也可能会包括其他关键字或选项，但至少要包括表的名字和列的细节。</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE customers(\n  cust_id      int       NOT NULL AUTO_INCREMENT,\n  cust_name    char(50)  NOT NULL ,\n  cust_address char(50)  NULL ,\n  cust_city    char(50)  NULL ,\n  cust_state   char(5)   NULL ,\n  cust_zip     char(10)  NULL ,\n  cust_country char(50)  NULL ,\n  cust_contact char(50)  NULL ,\n  cust_email   char(255) NULL ,\n  PRIMARY KEY (cust_id)\n) ENGINE=InnoDB;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="使用-null-值" tabindex="-1"><a class="header-anchor" href="#使用-null-值" aria-hidden="true">#</a> 使用 NULL 值</h2><p>允许NULL值的列也允许在插入行时不给出该列的值。不允许NULL值的列不接受该列没有值的行，换句话说，在插入或更新行时，该列必须有值。</p><p>每个表列或者是NULL列，或者是NOT NULL列，这种状态在创建时由表的定义规定。</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE orders(\n  order_num  int      NOT NULL AUTO_INCREMENT,\n  order_date datetime NOT NULL ,\n  cust_id    int      NOT NULL ,\n  PRIMARY KEY (order_num)\n) ENGINE=InnoDB;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>理解NULL 不要把NULL值与空串相混淆。NULL值是没有值，它不是空串。如果指定&#39;&#39;（两个单引号，其间没有字符），这在NOT NULL列中是允许的。空串是一个有效的值，它不是无值。NULL值用关键字NULL而不是空串指定</p></blockquote><h2 id="主键再介绍" tabindex="-1"><a class="header-anchor" href="#主键再介绍" aria-hidden="true">#</a> 主键再介绍</h2><p>正如所述，主键值必须唯一。即，表中的每个行必须具有唯一的主键值。如果主键使用单个列，则它的值必须唯一。如果使用多个列，则这些列的组合值必须唯一。</p><p><strong>主键可以创建时定义，也可以创建后定义。</strong></p><p>主键和NULL值，主键为其值唯一标识表中每个行的列。主键中只能使用不允许NULL值的列。允许NULL值的列不能作为唯一标识。</p><h2 id="auto-increment" tabindex="-1"><a class="header-anchor" href="#auto-increment" aria-hidden="true">#</a> AUTO_INCREMENT</h2><p><code>AUTO_INCREMENT</code> 自动增长，当我们将这个定义给当前列的后，在数据添加后该数值会不断的递增。</p><p>每个表只允许一个AUTO_INCREMENT列，而且它必须被索引。</p><h2 id="指定默认值" tabindex="-1"><a class="header-anchor" href="#指定默认值" aria-hidden="true">#</a> 指定默认值</h2><p>如果在插入行时没有给出值，MySQL允许指定此时使用的默认值。默认值用CREATE TABLE语句的列定义中的DEFAULT关键字指定。</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE `XXX`(\n  `ID` INT(11) NOT NULL AUTO_INCREMENT DEFAULT\n)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><strong>不允许函数</strong> 与大多数DBMS不一样，MySQL不允许使用函数作为默认值，它只支持常量。 使用默认值而不是NULL值 许多数据库开发人员使用默认值而不是NULL列，特别是对用于计算或数据分组的列更是如此。</p></blockquote><h2 id="引擎类型" tabindex="-1"><a class="header-anchor" href="#引擎类型" aria-hidden="true">#</a> 引擎类型</h2><p>MySQL有一个具体管理和处理数据的内部引擎。</p><p>在你使用CREATE TABLE语句时，该引擎具体创建表，而在你使用SELECT语句或进行其他数据库处理时，该引擎在内部处理你的请求。多数时候，此引擎都隐藏在DBMS内，不需要过多关注它。</p><p>但MySQL与其他DBMS不一样，它具有多种引擎。它打包多个引擎，这些引擎都隐藏在MySQL服务器内，全都能执行CREATE TABLE和SELECT等命令。</p><p><code>ENGINE=InnDB</code>：事务处理引擎，它不支持全文本搜索。 <code>ENGINE=MEMORY</code>：功能相当于MyISAM，但由于数据存储再内存中，速度快（特别适合于临时表）； <code>ENGINE=MyISAM</code>：一个性能极高的引擎，支持全文本搜索，但是不支持事务处理。</p><blockquote><p><strong>外键不能跨引擎</strong> 混用引擎类型有一个大缺陷。外键（用于强制实施引用完整性）不能跨引擎，即使用一个引擎的表不能引用具有使用不同引擎的表的外键。</p></blockquote><h2 id="更新表" tabindex="-1"><a class="header-anchor" href="#更新表" aria-hidden="true">#</a> 更新表</h2><p>为更新表定义，可使用ALTER TABLE语句。但是，理想状态下，当表中存储数据以后，该表就不应该再被更新。在表的设计过程中需要花费大量时间来考虑，以便后期不对该表进行大的改动。</p><p>注意点：</p><ul><li>在ALTER TABLE之后给出要更改的表名（该表必须存在，否则将出错）；</li><li>所做更改的列表。</li></ul><p>语法格式：</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- 添加\nALTER TABLE 表名 ADD 列名 数据类型...\n-- 删除\nALTER TABLE 表名 DROP 列名\n-- 修改已写好的列的数据类型\nALTER TABLE 表名 MODIFY 列名 数据类型...\n-- 修改将列替换\nALTER TABLE 表名 CHANGE 要替换的列 新的列名 数据类型...\n-- 改默认值\nALTER TABLE 表名 ALTER 列 SET DEFAULT 新值\n-- 删除默认值\nALTER TABLE 表名 ALTER 列 DROP DEFAULT\n-- 修改表名\nALTER TABLE 旧表名 RENAME TO 新表名\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE orderitems ADD CONSTRAINT fk_orderitems_orders FOREIGN KEY (order_num) REFERENCES orders (order_num);\n\nALTER TABLE orderitems ADD CONSTRAINT fk_orderitems_products FOREIGN KEY (prod_id) REFERENCES products (prod_id);\n\nALTER TABLE orders ADD CONSTRAINT fk_orders_customers FOREIGN KEY (cust_id) REFERENCES customers (cust_id);\n\nALTER TABLE products ADD CONSTRAINT fk_products_vendors FOREIGN KEY (vend_id) REFERENCES vendors (vend_id);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>复杂的表结构更改一般需要手动删除过程，它涉及以下步骤：</p><ul><li>用新的列布局创建一个新表；</li><li>使用INSERT SELECT语句从旧表复制数据到新表。如果有必要，可使用换函数和计算字段；</li><li>检验包含所需数据的新表；</li><li>重命名旧表（如果确定，可以删除它）；</li><li>用旧表原来的名字重命名新表；</li><li>根据需要，重新创建触发器、存储过程、索引和外键。</li></ul><blockquote><p><strong>小心使用ALTER TABLE</strong> 使用ALTER TABLE要极为小心，应该在进行改动前做一个完整的备份（模式和数据的备份）。数据库表的更改不能撤销，如果增加了不需要的列，可能不能删除它们。类似地，如果删除了不应该删除的列，可能会丢失该列中的所有数据。</p></blockquote><h2 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h2><p>使用DROP TABLE语句即可:</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>GROP TABLE xxx;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>注意：这是永久删除</p></blockquote><h2 id="重命名表" tabindex="-1"><a class="header-anchor" href="#重命名表" aria-hidden="true">#</a> 重命名表</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>RENAME TABLE old_table_name TO new_table_name;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',49),l={},r=(0,s(3744).Z)(l,[["render",function(e,n){return a}]])},3744:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}}}]);