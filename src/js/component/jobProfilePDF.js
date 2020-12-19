import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import PropTypes from "prop-types";

// Create Document Component
const JobProfilePDF = ({ store }) => {
	return (
		<Document>
			<Page size="A4" style={styles.body}>
				<Text style={styles.title}>Perfil Laboral</Text>
				<Text style={styles.student}>Miguel de Cervantes</Text>
				<Text style={styles.subtitle}>Cuestionario Profesores</Text>

				{store.teacherQuestionnaries &&
					store.teacherQuestionnaries.map((questionnarie, index) => {
						return (
							<View key={index}>
								<Text style={styles.subtitle2}>{questionnarie.name}</Text>

								{store.teacherQuestions &&
									store.teacherQuestions
										.filter(item => {
											if (questionnarie.id === item.questionnarie_id) {
												return item;
											}
										})
										.map((item, index) => {
											const answer = store.teacherAnswers.find(
												answer => answer.question_id == item.question_id
											);
											item.answer = answer ? answer.answer : null;
											return (
												<>
													<View key={index}>
														<Text style={styles.text}>{item.question}</Text>

														<Text style={styles.text}>{item.answer}</Text>
													</View>
												</>
											);
										})}
							</View>
						);
					})}

				<Text style={styles.subtitle}>Cuestionario Estudiantes</Text>

				{store.studentQuestionnaries &&
					store.studentQuestionnaries.map((questionnarie, index) => {
						return (
							<View key={index}>
								<Text style={styles.subtitle2}>{questionnarie.name}</Text>

								{store.studentQuestions &&
									store.studentQuestions
										.filter(item => {
											if (questionnarie.id === item.questionnarie_id) {
												return item;
											}
										})
										.map((item, index) => {
											const answer = store.studentAnswers.find(
												answer => answer.question_id == item.question_id
											);
											item.answer = answer ? answer.answer : null;
											return (
												<>
													<View key={index}>
														<Text style={styles.text}>{item.question}</Text>

														<Text style={styles.text}>{item.answer}</Text>
													</View>
												</>
											);
										})}
							</View>
						);
					})}
			</Page>
		</Document>
	);
};

// Create styles
const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35
	},

	title: {
		fontSize: 24,
		textAlign: "center"
	},
	student: {
		fontSize: 12,
		textAlign: "center",
		marginBottom: 40
	},
	text: {
		margin: 12,
		fontSize: 12,
		textAlign: "justify"
	},
	subtitle: {
		fontSize: 18,
		margin: 12
	},

	subtitle2: {
		fontSize: 16,
		margin: 12
	}
});

JobProfilePDF.propTypes = {
	store: PropTypes.object
};

export default JobProfilePDF;
