<template>
	<post-container>
		Your current account is 
		<div class="icons" >	
			<span class="material-icons">favorite_border</span>
		</div>
	</post-container>
	
	<post-container>
		<div class="icons">	
			<span class="material-icons">add</span>
		</div>
	</post-container>
	<post-container>
		<div class="header">
			<div class="profile">
				<div class="pic">
				</div>
				<div class="user">
					<div class="name">Choeng Veyseng</div>
					<div class="detail">Share publicly - Jun 27 2020</div>
				</div>
			</div>
			<div class="hastag">
				#hello
			</div>
			
		</div>
		
		<div class="content">
			Hello
		</div>
		<div class="commentTitle">Comments</div>
		<div class="comments">
			<div class="profileComment">
				<div class="pic">
				</div>
				<div class="user">
					<div class="name">Lisa</div>
					<div class="detail">Share publicly - Jun 28 2020</div>
				</div>
			</div>
			<div class="message">
				<div class="commentMessage">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate ratione corporis ab commodi sequi nemo molestias eius aspernatur, asperiores sed doloremque esse sapiente odio debitis repellat voluptatem iusto at.
				</div>
			</div>
		</div>
		<!--Comment Input-->
		<div class="interaction">
			<div class="commentNum">
					<div>1</div>
					<div>+</div>
			</div>
			<div class="comment">
				<div class="Reply">
					<div class="icons">	
						<span class="material-icons">reply</span>
					</div>
				</div>
				<div class="input">
					<input type="text" name="" id="">
				</div>
			</div>
			
		</div>
	</post-container>
	
</template>

<script>
import PostContainer  from '../components/PostContainer'
export default {
	components:{
		PostContainer

	}
}
</script>

<style scoped>
	.post{
		background: #eee;
		display: flex;
		flex-direction: column;
	}
	.profile{
		display: flex;
		flex-direction: row;
	}
	.header{
		display: flex;
		justify-content: space-between;
	}
	.pic{
		border: 1px solid #bbb;
		border-radius: 2rem;
		background: url('../assets/logo.png') no-repeat center center/cover white;
		width: 2rem;
		height: 2rem;
		margin-right: 0.5rem;
	}
	.user{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.detail{
		font-size: 0.5rem;
		color: #777;
	}
	.name{
		font-size: 1rem;
	}
	.interaction{
		margin-top: 3%;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.comment{
		display: flex;
		width: 60%;
	}
	.input{
		background:white;
		width: 100%;
		border: 1px solid #bbb;
		border-radius: 0 10px 10px 0;
		font-size: 1rem;
		padding: 1%;
		border-left: none;
		margin-left: none;
		padding: 1%;
	}
	.Reply{
		cursor: pointer;
		width: 5%;
		border: 1px solid #bbb;
		border-right: none;
		border-radius: 10px 0 0  10px;
		font-size: 1rem;
		padding: 1%;
		background: white;
	}
	.commentNum{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 10%;
		cursor: pointer;
		border: 1px solid #bbb;
		border-radius: 10px;
		font-size: 1rem;
		background: white;
		padding: 1%;
	}
	input{
		width: 90%;
		border: none;
		outline: none;
	}
	/*Content*/
	.content{
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid #bbb;
		padding-bottom: 1rem;
	}
	/*Edit the comments*/
	.commentTitle{
		display: flex;
		align-items: left;
		font-size: 0.85rem;
		color: black;
		font-weight: 1000;
	}
	.comments{
		width: 100%;
		border-top:1px solid #bbb;
		padding-top: 1rem;
		display: flex;
	}
	.message{
		color: black;
		display: block;
	}
	.commentMessage{
		text-align: left;
		width: 100%;
	}
	.profileComment{
		display: flex;
		flex-direction: row;
		width: 100%;
	}
</style>