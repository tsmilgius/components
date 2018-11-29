import  React from 'react';
import  ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import AprovalCard from './AprovalCard';



const App = () => {
    return (
        <div className="ui container comments">
            <AprovalCard>
                <CommentDetail
                    author='Sam'
                    timeAgo='Today at 4:45PM'
                    comment='blog post number 1'
                    avatar = {faker.image.avatar()}/>
            </AprovalCard>
            
            <AprovalCard>
                <CommentDetail
                    author='Tom'
                    timeAgo='Today at 2:17PM'
                    comment='blog post number 2'
                    avatar = {faker.image.avatar()}/>
            </AprovalCard>
            
            <AprovalCard>
                <CommentDetail 
                    author='Jane'
                    timeAgo='Today at 3:56PM' 
                    comment='blog post number 3' 
                    avatar = {faker.image.avatar()}/>
            </AprovalCard>
        </div>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);