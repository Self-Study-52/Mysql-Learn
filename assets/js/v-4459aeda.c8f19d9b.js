"use strict";(self.webpackChunkMysql_Learn=self.webpackChunkMysql_Learn||[]).push([[125],{6918:(e,s,a)=>{a.r(s),a.d(s,{data:()=>l});const l={key:"v-4459aeda",path:"/guide/%E3%80%8AMysql%E5%BF%85%E7%9F%A5%E5%BF%85%E4%BC%9A%E3%80%8B/%E7%AC%AC%E4%B8%89%E7%AB%A0%EF%BC%9A%E6%A3%80%E7%B4%A2%E8%AF%AD%E5%8F%A5%20SELECT.html",title:"第三章：检索语句 SELECT",lang:"en-US",frontmatter:{title:"第三章：检索语句 SELECT",lang:"en-US"},excerpt:"",headers:[{level:2,title:"检索单个列表数据",slug:"检索单个列表数据",children:[]},{level:2,title:"检索多个列表数据",slug:"检索多个列表数据",children:[]},{level:2,title:"检索所有列表数据",slug:"检索所有列表数据",children:[]},{level:2,title:"检索不同的行数据（去重）",slug:"检索不同的行数据-去重",children:[]},{level:2,title:"使用完全限定的表名",slug:"使用完全限定的表名",children:[]}],filePathRelative:"guide/《Mysql必知必会》/第三章：检索语句 SELECT.md",git:{updatedTime:1635847604e3,contributors:[{name:"Sue-52",email:"1219243947@qq.com",commits:1}]}}},5277:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});const l=(0,a(6252).uE)('<h1 id="第三章-检索语句-select" tabindex="-1"><a class="header-anchor" href="#第三章-检索语句-select" aria-hidden="true">#</a> 第三章： 检索语句 SELECT</h1><p><code>SELECT</code> 语句用于检索表的数据 语法格式：</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select xxx from 表名\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="检索单个列表数据" tabindex="-1"><a class="header-anchor" href="#检索单个列表数据" aria-hidden="true">#</a> 检索单个列表数据</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select 列名 from 表名;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>利用 <code>SELECT</code> 语句从 cities 表中检索一个名为：<code>name</code> 的列。所需的列名在 <code>SELECT</code> 关键字之后给出， FROM 关键在指出从中检索数据的表名。</p><h2 id="检索多个列表数据" tabindex="-1"><a class="header-anchor" href="#检索多个列表数据" aria-hidden="true">#</a> 检索多个列表数据</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select 列名1，列名2... from 表名;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>通过给定的多个 列名... 进行检索</p><p><img src="https://gitee.com/sue201982/mysql/raw/master/img/202110292227928.png" alt="image-20211013195213117"></p><h2 id="检索所有列表数据" tabindex="-1"><a class="header-anchor" href="#检索所有列表数据" aria-hidden="true">#</a> 检索所有列表数据</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select * from 表名;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果给定一个通配符（*），则返回表中所有列。列的顺序一般是列在表定义中出现的顺序。但有时候并不是这样的，表的模式的变化（如添加或删除列）可能会导致顺序的变化。</p><p><img src="https://gitee.com/sue201982/mysql/raw/master/img/202110292227929.png" alt="image-20211013195736139"></p><h2 id="检索不同的行数据-去重" tabindex="-1"><a class="header-anchor" href="#检索不同的行数据-去重" aria-hidden="true">#</a> 检索不同的行数据（去重）</h2><p>当我们需要查看表中不同的数据，将重复的值去除的话 可以使用 <code>DISTINCT</code> 关键字。</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select type from cities;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img/202110292227930.png" alt="image-20211013200243176"></p><p>上图我们发现了有许多重复的数据，这是我们不想要看到的</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select distinct type from cities;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/sue201982/mysql/raw/master/img/202110292227931.png" alt="image-20211013200353438"></p><p>DISTINCT关键字应用于所有列而不仅是前置它的列。如果给出SELECT DISTINCT type, code，除非指定的两个列都不同，否则所有行都将被 检索出来。</p><h2 id="使用完全限定的表名" tabindex="-1"><a class="header-anchor" href="#使用完全限定的表名" aria-hidden="true">#</a> 使用完全限定的表名</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select 表名.列名 from 数据库名.表名\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>将语法限定在只用<strong>该数据库下的这个表中的列才能获取</strong></p><p><img src="https://gitee.com/sue201982/mysql/raw/master/img/202110292227932.png" alt="image-20211013200705559"></p>',26),n={},i=(0,a(3744).Z)(n,[["render",function(e,s){return l}]])},3744:(e,s)=>{s.Z=(e,s)=>{const a=e.__vccOpts||e;for(const[e,l]of s)a[e]=l;return a}}}]);