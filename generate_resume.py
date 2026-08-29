from fpdf import FPDF

class ResumePDF(FPDF):
    def header(self):
        pass
    def footer(self):
        pass

pdf = ResumePDF('P', 'mm', 'A4')
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()

# Professional Colors
primary_color = (15, 60, 115)     # Navy Blue
text_dark = (33, 37, 41)          # Charcoal
text_gray = (108, 117, 125)       # Medium Gray
line_color = (200, 200, 200)      # Light Gray for dividers

# ===== HEADER (NAME & CONTACT) =====
pdf.set_font("Helvetica", "B", 26)
pdf.set_text_color(*primary_color)
pdf.cell(0, 12, "BISHWASHREE CHAKRABORTY", new_x="LMARGIN", new_y="NEXT", align="C")

pdf.set_font("Helvetica", "", 11)
pdf.set_text_color(*text_dark)
pdf.cell(0, 6, "B.Tech CSE Student & Developer | AI/ML | Computer Vision", new_x="LMARGIN", new_y="NEXT", align="C")

pdf.ln(1)
pdf.set_font("Helvetica", "", 9)
pdf.set_text_color(*text_gray)
pdf.cell(0, 5, "bishwashreechakraborty@gmail.com  |  +91 60009 41579  |  Assam, India", new_x="LMARGIN", new_y="NEXT", align="C")
pdf.cell(0, 5, "github.com/bishwashreechakraborty-gif  |  linkedin.com/in/bishwashree-chakraborty-205621327", new_x="LMARGIN", new_y="NEXT", align="C")

pdf.ln(6)

# ===== HELPER FUNCTIONS =====
def draw_section_header(title):
    pdf.set_font("Helvetica", "B", 12)
    pdf.set_text_color(*primary_color)
    pdf.cell(0, 6, title.upper(), new_x="LMARGIN", new_y="NEXT")
    
    # Draw a thin gray line below the header
    pdf.set_draw_color(*line_color)
    pdf.set_line_width(0.3)
    pdf.line(10, pdf.get_y(), 200, pdf.get_y())
    pdf.ln(3)

def draw_entry(title, subtitle, date, location="", description="", skills=None):
    # Title and Date on the same line
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(*text_dark)
    pdf.cell(140, 5, title)
    
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*text_gray)
    pdf.cell(0, 5, date, new_x="LMARGIN", new_y="NEXT", align="R")
    
    # Subtitle and Location on the next line
    pdf.set_font("Helvetica", "I", 9.5)
    pdf.set_text_color(*text_dark)
    pdf.cell(140, 5, subtitle)
    
    if location:
        pdf.set_font("Helvetica", "", 8)
        pdf.set_text_color(*text_gray)
        pdf.cell(0, 5, location, new_x="LMARGIN", new_y="NEXT", align="R")
    else:
        pdf.ln(5)
    
    # Description
    if description:
        pdf.set_font("Helvetica", "", 9)
        pdf.set_text_color(*text_dark)
        # Add a small left margin for bullet points
        pdf.set_x(12)
        pdf.multi_cell(0, 4.5, description)
        pdf.set_x(10) # Reset x
    
    # Skills
    if skills:
        pdf.set_font("Helvetica", "B", 8)
        pdf.set_text_color(*text_dark)
        pdf.cell(12, 5, "Skills: ")
        pdf.set_font("Helvetica", "", 8)
        pdf.set_text_color(*text_gray)
        pdf.cell(0, 5, " | ".join(skills), new_x="LMARGIN", new_y="NEXT")
    
    pdf.ln(3)

# ===== PROFESSIONAL SUMMARY =====
draw_section_header("Professional Summary")
pdf.set_font("Helvetica", "", 9.5)
pdf.set_text_color(*text_dark)
pdf.multi_cell(0, 5, "Passionate B.Tech Computer Science Engineering student at Barak Valley Engineering College with hands-on experience in AI/ML, Computer Vision, and Software Development. Completed a Summer Internship at IIT Guwahati's Technology Innovation Hub on MRI Brain Tumor Segmentation. Proficient in Python, Java, C/C++, React, and Deep Learning frameworks. Actively seeking opportunities to apply technical skills to real-world problems.")
pdf.ln(4)

# ===== EDUCATION =====
draw_section_header("Education")

draw_entry(
    "Bachelor of Technology, Computer Science Engineering",
    "Barak Valley Engineering College",
    "Aug 2024 - Present",
    "Assam, India",
    "Coursework: C, CSS, React, AI/ML, Data Structures & Algorithms."
)

draw_entry(
    "All India Senior School Certificate (AISSC), Science (PCM)",
    "Sai Vikash Vidya Niketan",
    "Aug 2021 - May 2023",
    "",
    "Grade: 73%"
)

draw_entry(
    "High School Leaving Certificate (HSLC), General Studies",
    "Emmanuel English Higher Secondary School",
    "Feb 2019 - Jul 2021",
    "",
    "Grade: 73.33% | Class Captain. Represented school in science competitions and sports."
)
pdf.ln(1)

# ===== EXPERIENCE =====
draw_section_header("Professional Experience")

draw_entry(
    "Summer Intern - Brain Tumor MRI Segmentation",
    "Technology Innovation Hub (IIT Guwahati)",
    "Jul 2026 - Present",
    "Guwahati, Assam, India",
    "\x95 Developed a Deep Learning pipeline for Brain Tumor Classification & Segmentation from MRI scans.\n\x95 Gained hands-on experience with AI model training, data preprocessing, and evaluation techniques.\n\x95 Collaborated with research mentors in a professional academic environment.",
    ["Python", "Deep Learning", "Artificial Intelligence", "Machine Learning"]
)

draw_entry(
    "Social Work Intern",
    "Mother Old Age Home",
    "Jul 2025 - Aug 2025",
    "Guwahati, Assam, India",
    "\x95 Assisted in daily operations and social welfare activities for elderly residents.\n\x95 Organized engagement programs and conducted field observations.\n\x95 Demonstrated strong interpersonal and team collaboration skills.",
    ["Social Work", "Team Collaboration", "Interpersonal Skills"]
)

# ===== PROJECTS =====
draw_section_header("Key Projects")

draw_entry(
    "AI Invisible Cloak",
    "Personal Project",
    "2025",
    "",
    "\x95 Built a real-time Computer Vision application that creates an invisibility effect using HSV color detection.\n\x95 Implemented background subtraction, morphological filtering, and frame masking with OpenCV.",
    ["Python", "OpenCV", "HSV Color Detection", "NumPy"]
)

draw_entry(
    "MRI Brain Tumor Detection",
    "IIT Guwahati Internship Project",
    "2026",
    "",
    "\x95 Designed a deep learning model to accurately detect and classify brain tumors from MRI scans.",
    ["Python", "TensorFlow", "Deep Learning"]
)

draw_entry(
    "FoodScan",
    "Personal Project",
    "2025",
    "",
    "\x95 Developed a food scanning and analysis application helping users track nutritional value.",
    ["React", "Node.js", "API Integration"]
)
pdf.ln(1)

# ===== TECHNICAL SKILLS =====
draw_section_header("Technical Skills")

pdf.set_font("Helvetica", "B", 9)
pdf.set_text_color(*text_dark)
pdf.cell(40, 5, "Languages:")
pdf.set_font("Helvetica", "", 9)
pdf.set_text_color(*text_gray)
pdf.cell(0, 5, "Python, C, C++, Java, JavaScript, SQL, HTML, CSS", new_x="LMARGIN", new_y="NEXT")

pdf.set_font("Helvetica", "B", 9)
pdf.set_text_color(*text_dark)
pdf.cell(40, 5, "Frameworks & Tools:")
pdf.set_font("Helvetica", "", 9)
pdf.set_text_color(*text_gray)
pdf.cell(0, 5, "React, TensorFlow, OpenCV, NumPy, Pandas, Git, GitHub", new_x="LMARGIN", new_y="NEXT")

pdf.set_font("Helvetica", "B", 9)
pdf.set_text_color(*text_dark)
pdf.cell(40, 5, "Domains:")
pdf.set_font("Helvetica", "", 9)
pdf.set_text_color(*text_gray)
pdf.cell(0, 5, "AI/ML, Computer Vision, Deep Learning, Data Analysis, Web Development", new_x="LMARGIN", new_y="NEXT")

pdf.ln(4)

# ===== CERTIFICATIONS =====
draw_section_header("Licenses & Certifications")

certs = [
    ("30-Day Summer Internship - Brain Tumor MRI Segmentation", "Technology Innovation Hub (IIT Guwahati)", "Jul 2026"),
    ("Data Analysis with Python", "IBM", "Apr 2026"),
    ("Claude AI: From Basics to Build", "PW (PhysicsWallah)", "Apr 2026"),
]

for title, issuer, date in certs:
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(*text_dark)
    pdf.cell(140, 5, title)
    pdf.set_font("Helvetica", "", 8)
    pdf.set_text_color(*text_gray)
    pdf.cell(0, 5, date, new_x="LMARGIN", new_y="NEXT", align="R")
    pdf.set_font("Helvetica", "I", 8)
    pdf.set_text_color(*text_gray)
    pdf.cell(0, 4, "Issued by " + issuer, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)

# Save
pdf.output("public/resume.pdf")
print("Resume PDF generated successfully!")
