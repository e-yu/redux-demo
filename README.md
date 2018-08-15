#展示组件

##Pagination 分页组件
- pageCurrent : Number 表示当前页数
- urlPrefix : String 跳转到的页面前缀
- jumpClick : Function (index) 点击时的回调函数，index为跳转到的页数

##List 文章列表显示组件
- topicsData ：Array 以{id，title，content} 形式存储列表项的数组
- urlPrefix : String 跳转到的页面前缀

##ListFilter 分类筛选文章列表组件
- tabs ：Array 以 {name,isCheck} 形式存储主题分类
- handleClick ：Function () 点击时的回调函数

##Articale 详情页内容组件
- content : string 文章内容
- pageNum : Number 所在页码
- position : Number 文章偏移量

##Reply 评论内容组件
- comments: Array 以{id, author, content}形式存储评论内容




#State设计
```
{
    fetchState:{
        isFetching: false,  //是否与服务器通信
        error: false    //执行时的错误
    },
    setPageCurrent:{
        pageCurrent,    //当前列表页或者详情页所在的列表页
    },
    post：{
        setList:{
            list: [
                {
                    id,
                    title,
                    content,
                    tab
                },
                ...
            ]
        },
        setReplies:{
            replies: [
                {
                    id,
                    author,
                    content
                }
                ... 
            ]
        },
        setIndex:{
            index: ['id1', 'id2',...]   //以 post -> replies -> id 为索引寻找list中的对象序号
        }
    },
    setTabs:{
        tabs: [
            {
                name: 'all',
                isCheck: true  //默认为true
            },
            {
                name: 'ask',
                isCheck: false
            },
            {
                name: 'share',
                isCheck: false
            },
            {
                name: 'job',
                isCheck: false
            },
            {
                name: 'good',
                isCheck: false
            }
        ]
    }
}
```
