<!--
	Angular template containning the message app screen
	
	Created January 23rd, 2015
	@author: Yariv Katz
	@version: 1.0
	@copyright: Nerdeez LTD
-->

<div class="layout">
	<div class="messages">
		<ul>
			<li ng-repeat="message in messages">
				{{message.message}}
			</li>
		</ul>
	</div>
	<div class="send-message">
		<form ng-submit="sendText();">
			<input type="text" ng-model="newMessage" />
			<input type="submit" value="Send" />
		</form>
	</div>
</div>