import React from 'react'

export default function Contact() {
    return (
        <div id="contact">
            <div className="container" id="section7">
				<div className="row">
					<div className="col-sm-6">
						<h1>CONTACT ME</h1>
						<p>Want to know more about me or if you want to hire me just send a message by filling the form given and I will try to reply as soon as possible.</p>
						<a href="mailto:sahilsinghmca@gmail.com"><p><span>Email:</span>sahilsinghmca@gmail.com</p></a>
						<p><span>Phone:</span>+91-7709917336</p>
					</div>
					<div className="col-sm-6">
						<form method="post" action="php/send_script.php">
							<label htmlFor="name">Name *</label>
							<input type="text" id="name" name="name" required />
							<label htmlFor="email">Email Address *</label>
							<input type="email" id="email" name="email" required />
							<label htmlFor="msg">Subject *</label>
							<textarea name="msg" id="msg" required></textarea>
							<input type="submit" name="send_message_btn" value="CONTACT ME" />
						</form>
					</div>
				</div>
			</div>
        </div>
    )
}
