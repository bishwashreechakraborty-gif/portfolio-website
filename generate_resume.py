from fpdf import FPDF

class PremiumResume(FPDF):
    def header(self):
        pass
    def footer(self):
        # Subtle footer line
        self.set_y(-12)
        self.set_draw_color(200, 200, 200)
        self.set_line_width(0.3)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(2)
        self.set_font("Helvetica", "I", 7)
        self.set_text_color(160, 160, 160)
        self.cell(0, 5, "Bishwashree Chakraborty  |  bishwashreechakraborty@gmail.com  |  +91 60009 41579", align="C")

pdf = PremiumResume('P', 'mm', 'A4')
pdf.set_auto_page_break(auto=True, margin=18)
pdf.add_page()

# ===== COLOR PALETTE =====
navy = (15, 23, 42)        # Dark navy for headings
accent = (220, 38, 38)     # Red accent (matching portfolio)
dark = (30, 41, 59)        # Slate dark for body text
mid = (71, 85, 105)        # Slate mid for subtitles
light = (100, 116, 139)    # Slate light for dates
vlight = (148, 163, 184)   # Very light for minor text
white = (255, 255, 255)
line_color = (226, 232, 240)  # Light gray for dividers

# ===== TOP ACCENT BAR =====
pdf.set_fill_color(*accent)
pdf.rect(0, 0, 210, 3, 'F')

# ===== NAME HEADER =====
pdf.set_y(10)
pdf.set_font("Helvetica", "B", 32)
pdf.set_text_color(*navy)
pdf.cell(0, 14, "Bishwashree", new_x="LMARGIN", new_y="NEXT", align="C")
pdf.set_font("Helvetica", "", 32)
pdf.cell(0, 12, "Chakraborty", new_x="LMARGIN", new_y="NEXT", align="C")

pdf.ln(2)

# Tagline
pdf.set_font("Helvetica", "", 11)
pdf.set_text_color(*mid)
pdf.cell(0, 6, "B.Tech CSE Student  |  AI/ML Enthusiast  |  Computer Vision Developer", new_x="LMARGIN", new_y="NEXT", align="C")

pdf.ln(3)

# Contact row with red accent dots as separators
pdf.set_font("Helvetica", "", 9)
pdf.set_text_color(*dark)
contact_text = "bishwashreechakraborty@gmail.com     +91 60009 41579     Assam, India"
pdf.cell(0, 5, contact_text, new_x="LMARGIN", new_y="NEXT", align="C")

pdf.set_text_color(*accent)
pdf.set_font("Helvetica", "", 8)
links = "github.com/bishwashreechakraborty-gif     linkedin.com/in/bishwashree-chakraborty-205621327"
pdf.cell(0, 5, links, new_x="LMARGIN", new_y="NEXT", align="C")

pdf.ln(5)

# ===== HELPER FUNCTIONS =====
def section_header(title):
    pdf.set_font("Helvetica", "B", 12)
    pdf.set_text_color(*accent)
    pdf.cell(0, 7, title.upper(), new_x="LMARGIN", new_y="NEXT")
    # Elegant double line
    y = pdf.get_y()
    pdf.set_draw_color(*accent)
    pdf.set_line_width(0.6)
    pdf.line(10, y, 60, y)
    pdf.set_draw_color(*line_color)
    pdf.set_line_width(0.2)
    pdf.line(60, y, 200, y)
    pdf.ln(4)

def entry_header(title, subtitle, date, location=""):
    # Title row
    pdf.set_font("Helvetica", "B", 10.5)
    pdf.set_text_color(*navy)
    title_w = pdf.get_string_width(title) + 2
    pdf.cell(title_w, 5.5, title)
    
    # Date aligned right
    pdf.set_font("Helvetica", "", 8.5)
    pdf.set_text_color(*light)
    pdf.cell(0, 5.5, date, new_x="LMARGIN", new_y="NEXT", align="R")
    
    # Subtitle row
    pdf.set_font("Helvetica", "I", 9.5)
    pdf.set_text_color(*accent)
    sub_w = pdf.get_string_width(subtitle) + 2
    pdf.cell(sub_w, 5, subtitle)
    
    if location:
        pdf.set_font("Helvetica", "", 8)
        pdf.set_text_color(*vlight)
        pdf.cell(0, 5, location, new_x="LMARGIN", new_y="NEXT", align="R")
    else:
        pdf.ln(5)

def bullet(text):
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*dark)
    x = pdf.get_x()
    y = pdf.get_y()
    
    # Draw red circle bullet
    pdf.set_fill_color(*accent)
    pdf.ellipse(x + 2, y + 1.5, 1.2, 1.2, style="F")
    
    # Temporarily change left margin
    original_l_margin = pdf.l_margin
    pdf.set_left_margin(original_l_margin + 6)
    pdf.set_y(y) # reset Y since set_left_margin might trigger a jump depending on state
    
    pdf.set_text_color(*dark)
    pdf.multi_cell(0, 4.5, text)
    
    # Restore left margin
    pdf.set_left_margin(original_l_margin)

def skill_tags(skills):
    pdf.set_font("Helvetica", "", 7.5)
    pdf.set_text_color(*mid)
    pdf.cell(0, 4, "  ".join([f"[{s}]" for s in skills]), new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)

def entry_gap():
    pdf.ln(3)

# ===== PROFESSIONAL SUMMARY =====
section_header("Professional Summary")
pdf.set_font("Helvetica", "", 9.5)
pdf.set_text_color(*dark)
pdf.multi_cell(0, 5, "Driven B.Tech Computer Science Engineering student at Barak Valley Engineering College with demonstrated experience in AI/ML and Computer Vision. Completed a prestigious Summer Internship at IIT Guwahati's Technology Innovation Hub, building a Deep Learning pipeline for MRI Brain Tumor Segmentation. Proficient across Python, Java, C/C++, React, and modern AI frameworks. Seeking challenging opportunities to apply analytical thinking and technical expertise to impactful projects.")
pdf.ln(4)

# ===== EXPERIENCE =====
section_header("Professional Experience")

entry_header(
    "Summer Research Intern",
    "Technology Innovation Hub, IIT Guwahati",
    "Jul 2026 - Present",
    "Guwahati, Assam"
)
bullet("Engineered a Deep Learning pipeline for Brain Tumor Classification & Segmentation from MRI scans")
bullet("Applied advanced data preprocessing, augmentation, and model evaluation techniques on medical imaging datasets")
bullet("Collaborated with faculty mentors in a professional research environment at a premier national institute")
skill_tags(["Python", "Deep Learning", "TensorFlow", "AI/ML", "Medical Imaging"])
entry_gap()

entry_header(
    "Social Work Intern",
    "Mother Old Age Home",
    "Jul 2025 - Aug 2025",
    "Guwahati, Assam"
)
bullet("Coordinated daily operations and organized structured engagement programs for elderly residents")
bullet("Conducted field observations and compiled activity reports for institutional review")
bullet("Strengthened interpersonal communication and team collaboration through community service")
skill_tags(["Social Work", "Team Collaboration", "Communication", "Interpersonal Skills"])
pdf.ln(4)

# ===== EDUCATION =====
section_header("Education")

entry_header(
    "Bachelor of Technology - Computer Science Engineering",
    "Barak Valley Engineering College",
    "Aug 2024 - Present",
    "Assam, India"
)
bullet("Relevant Coursework: Data Structures & Algorithms, AI/ML, Computer Vision, Database Systems, Web Development")
entry_gap()

entry_header(
    "Senior Secondary (AISSC) - Science (PCM)",
    "Sai Vikash Vidya Niketan",
    "Aug 2021 - May 2023"
)
bullet("Aggregate: 73%")
entry_gap()

entry_header(
    "High School (HSLC) - General Studies",
    "Emmanuel English Higher Secondary School",
    "Feb 2019 - Jul 2021"
)
bullet("Aggregate: 73.33%  |  Class Captain  |  Science competitions & sports representative")
pdf.ln(4)

# ===== TECHNICAL SKILLS =====
section_header("Technical Skills")

def skill_row(category, items):
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(*navy)
    pdf.cell(42, 5.5, category)
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*dark)
    pdf.cell(0, 5.5, items, new_x="LMARGIN", new_y="NEXT")

skill_row("Languages", "Python  |  C  |  C++  |  Java  |  JavaScript  |  SQL  |  HTML  |  CSS")
skill_row("Frameworks & Tools", "React  |  TensorFlow  |  OpenCV  |  NumPy  |  Pandas  |  Git  |  GitHub")
skill_row("Domains", "Artificial Intelligence  |  Machine Learning  |  Computer Vision  |  Deep Learning  |  Data Analysis")
skill_row("Soft Skills", "Problem Solving  |  Team Collaboration  |  Communication  |  Critical Thinking")
pdf.ln(4)

# ===== KEY PROJECTS =====
section_header("Key Projects")

entry_header("AI Invisible Cloak", "Personal Project  -  Computer Vision", "2025")
bullet("Built a real-time invisibility effect using HSV color detection, background subtraction, and frame masking with OpenCV")
skill_tags(["Python", "OpenCV", "HSV Detection", "NumPy"])
entry_gap()

entry_header("MRI Brain Tumor Detection", "IIT Guwahati Internship Project", "2026")
bullet("Designed a CNN-based deep learning model for accurate detection and classification of brain tumors from MRI scans")
skill_tags(["Python", "TensorFlow", "Deep Learning", "Medical AI"])
entry_gap()

entry_header("FoodScan", "Personal Project  -  Full Stack", "2025")
bullet("Developed a food scanning and nutritional analysis application with real-time API-driven data retrieval")
skill_tags(["React", "Node.js", "API Integration"])
entry_gap()

entry_header("Student Admission Portal", "Academic Project  -  Desktop Application", "2025")
bullet("Engineered a Java-based desktop application to automate and streamline the university admission workflow")
skill_tags(["Java", "Swing", "MySQL"])
entry_gap()

entry_header("Digit Recognition from Scratch", "Personal Project  -  Neural Networks", "2025")
bullet("Implemented a complete handwritten digit recognition system from scratch without external ML libraries")
skill_tags(["Python", "Mathematics", "Neural Networks"])
pdf.ln(4)

# ===== CERTIFICATIONS =====
section_header("Licenses & Certifications")

certs = [
    ("30-Day Summer Internship - Brain Tumor MRI Segmentation", "Technology Innovation Hub, IIT Guwahati", "Jul 2026"),
    ("Data Analysis with Python", "IBM", "Apr 2026"),
    ("Claude AI: From Basics to Build", "PW (PhysicsWallah)", "Apr 2026"),
    ("Generative AI for All", "PW (PhysicsWallah)", "Apr 2026"),
    ("Python 101 for Data Science", "Cognitive Class (IBM)", "Apr 2026"),
]

for title, issuer, date in certs:
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(*navy)
    pdf.cell(150, 5, title)
    pdf.set_font("Helvetica", "", 8)
    pdf.set_text_color(*light)
    pdf.cell(0, 5, date, new_x="LMARGIN", new_y="NEXT", align="R")
    pdf.set_font("Helvetica", "", 8)
    pdf.set_text_color(*vlight)
    pdf.cell(0, 4, "Issued by " + issuer, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)

# ===== BOTTOM ACCENT BAR =====
pdf.set_fill_color(*accent)
y_bottom = pdf.h - 3
pdf.rect(0, y_bottom, 210, 3, 'F')

# Save
pdf.output("public/resume.pdf")
print("Premium resume PDF generated successfully!")
